import { postalCodeLookup } from '../utils/postalCodeLookup';

jest.mock('../api-config/config.json', () => ({
  postcodeapi_baseurl: {
    value: 'https://g8w4x6soxi.execute-api.us-east-1.amazonaws.com/Prod/api/PostCodesLookup/',
  },
  autocomplete: {
    value: 'autocomplete/',
  },
}));

describe('postalCodeLookup', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue([]),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calls the correct API endpoint with the provided postal code', async () => {
    const postalCode = 'IG27N';

    await postalCodeLookup(postalCode);

    expect(global.fetch).toHaveBeenCalledWith(
      'https://g8w4x6soxi.execute-api.us-east-1.amazonaws.com/Prod/api/PostCodesLookup/autocomplete/IG27N'
    );
  });

  it('returns the data fetched from the API', async () => {
    const mockData = [{ country: 'UK' }];
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const postalCode = '12345';
    const result = await postalCodeLookup(postalCode);

    expect(result).toEqual(mockData);
  });

  it('logs the start and end of the API call', async () => {
    const postalCode = 'IG27NH'; 
    await postalCodeLookup(postalCode); 
  });

  it('returns an empty array if the API call returns empty data', async () => {
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue([]),
    });

    const postalCode = '12345';
    const result = await postalCodeLookup(postalCode);

    expect(result).toEqual([]);
  });

    
});

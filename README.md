**Postcode Lookup Web Application**

**Features**

Search for postcodes by entering the postcode value and selecting the country from the dropdown

View detailed information about the selected postcode, including country, region, admin district, parliamentary constituency, and area

**Technologies Used**

React.js for the front-end

Axios for making HTTP requests to the Postcode Web API

AG grid table

AWS for hosting the application

API Used

The application consumes the Postcode Web API to retrieve postcode data.

 React App: https://postalcodeweb.s3.amazonaws.com/index.html

Web API - https://g8w4x6soxi.execute-api.us-east-1.amazonaws.com/Prod/swagger/index.html  

https://postcodes.io/ (External api)
It is always a good practice to have a well-organized project folder structure for a loosely coupled architecture. Implemented ReactJS component structure strategy.

Ag Grid Web Application
This is a web application built with the following features:

Data loading into an ag grid table
Filter and pagination functionality
Hosted on AWS S3
Adherence to SOLID principles

 JEST framework, along with the React Testing Library, used for mocking services in this React application.

Features
Data loading into ag grid
The application loads data into an ag grid table using the ag-grid-community package.

Filter and pagination functionality
The application allows you to filter and paginate through the data in the ag grid table using the ag-grid-community package.

Hosting on AWS S3
The application is hosted on AWS S3, which provides a secure and scalable environment for hosting web applications.

Adherence to SOLID principles
The application adheres to the SOLID principles of object-oriented programming, which helps to ensure that the code is modular, flexible, and easy to maintain.

**Installation**

To install Postcode Lookup, follow these steps:

Clone the repository: git clone ** https://github.com/maringanti1/PostalCodeLookupWeb.git **

Branch: Main branch

Install dependencies: npm install
                      npm install winston (if not installed automatically)

Start the development server: npm start                              
                              npm run build (The build folder is ready to be deployed)
                              npm run test (Wne the test cases needed to execute)

The below fields are used in the context of postcode lookup or address search functionality in this applications.

**Postcode**

**Region**

**Country**

**Area**

**Parliamentary Constituency**

**Admin District**

**Usage**

To use Postcode Lookup, simply open the application in your web browser and start searching for postcodes by entering the postcode value and selecting the country from the dropdown. Once a postcode is selected, detailed information about the selected postcode will be displayed.
 
**Credits**
Postcode Lookup project is created by Laxminarsimha Maringanti.

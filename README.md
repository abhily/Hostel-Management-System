# Hostel Management System

## Overview
The Hostel Management System is a comprehensive web-based solution designed to streamline and automate hostel administration processes. This platform facilitates efficient management of room allocations, student complaints, leave applications, cleaning verification, and security monitoring. The system also integrates parent communication capabilities through SMS notifications.

Built on Node.js, Express, and MongoDB, the application implements role-based access control for Chief Wardens, Wardens, Students, and Security Personnel.

## Core Functionality

### Chief Warden Portal
- Block and room assignment management for wardens
- Administrative oversight capabilities
- System configuration and user management

### Warden Portal
- Room allocation management for students
- Leave request approval workflow
- Complaint resolution system
- Parent communication through Twilio SMS integration
- Security log monitoring and reporting

### Student Portal
- Room information access
- Complaint submission interface
- Leave application system
- Daily room cleaning verification

### Security Personnel Portal
- Entry and exit record management for students, staff, and visitors
- Comprehensive logging system capturing:
  - Individual identification
  - Purpose of exit
  - Departure time
  - Anticipated return time

## Technical Specifications

### Technology Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js with Express framework
- **Database**: MongoDB
- **Communication**: Twilio API for SMS services

### Project Structure
```
HOSTELMan/
├── public/            # Static assets (CSS, JavaScript, images)
├── routes/            # API and page routing definitions
├── models/            # MongoDB schema definitions
├── views/             # Frontend templates
├── .env               # Environment configuration (not in repository)
├── server.js          # Application entry point
└── package.json       # Project dependencies and metadata
```

## Installation and Deployment

### Prerequisites
- Node.js (v14 or higher)
- npm package manager
- MongoDB instance (local or cloud-based)
- Twilio account for SMS functionality

### Setup Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/Kouser3485/HOSTELMan.git
cd HOSTELMan
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Configure Environment Variables
Create a `.env` file in the project root directory with the following configuration:

```
MONGODB_URI=your_mongodb_connection_string
TWILIO_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
PORT=3000
```

#### 4. Launch the Application
```bash
node server.js
```

#### 5. Access the System
Open your web browser and navigate to:
```
http://localhost:3000
```

## Project Background

This system was developed to address the challenges of manual hostel management processes. It provides a centralized platform that enhances operational efficiency by digitizing administrative tasks and improving communication between all stakeholders.

The solution offers real-time management capabilities for room assignments, complaint handling, leave processing, and security monitoring while ensuring parents remain informed through automated messaging services.

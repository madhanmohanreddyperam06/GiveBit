# GiveBit

![Angular](https://img.shields.io/badge/Angular-16-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)


A comprehensive full-stack web application designed to streamline charity donations and facilitate seamless contributions between NGOs and donors. The platform provides an intuitive interface for managing donation requests, tracking contributions, and fostering community engagement through real-time updates and gamification features.

## Key Features

### **User Authentication & Authorization**

- Role-based access control (NGO/Donor)
- Secure JWT authentication
- Password encryption with bcryptjs

### **Donation Management**

- NGOs can create, edit, and manage donation requests
- Categorization by donation type (monetary, goods, services)
- Priority-based donation sorting
- Location-based donation discovery

### **Contribution System**

- Donors can browse and filter available donations
- Secure contribution processing
- Real-time contribution tracking
- Contribution history and analytics

### **Dashboard & Analytics**

- Personalized dashboards for NGOs and Donors
- Real-time statistics and insights
- Visual charts and progress indicators

### **Gamification & Community**

- Leaderboard showcasing top contributors
- Achievement badges and recognition system
- Social sharing capabilities

### **Real-time Features**

- Live status updates for donations
- Instant notifications for contributions
- Real-time chat support system

## Technology Stack

### Frontend Technologies

![Angular](https://img.shields.io/badge/Angular-16-DD0031?style=flat-square&logo=angular&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular_Material-7B1FA2?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=flat-square&logo=reactivex&logoColor=white)

- **Angular 16** - Modern frontend framework with component-based architecture
- **Angular Material** - UI component library for consistent design
- **TypeScript** - Type-safe JavaScript for better code quality
- **RxJS** - Reactive programming for handling asynchronous operations

### Backend Technologies

![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, minimalist web framework for Node.js
- **TypeScript** - Type-safe development on the backend
- **MySQL** - Relational database for data persistence
- **JWT Authentication** - Secure token-based authentication
- **bcryptjs** - Password hashing for security

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MySQL Server** (v8.0 recommended) - [Download here](https://www.mysql.com/)
- **Angular CLI** - Install globally: `npm install -g @angular/cli`
- **Git** - For version control

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/madhanmohanreddyperam06/Donation-and-Charity-Management-Portal.git
cd "Charity & Donation Management Portal"
```

### 2. Backend Setup

#### Install Backend Dependencies

```bash
cd backend
npm install
```

#### Database Setup

1. Start MySQL Server
2. Create database:

```sql
CREATE DATABASE charity_donation_portal;
```

1. Run the database schema:

```bash
mysql -u root -p charity_donation_portal < src/database.sql
```

#### Environment Configuration

Create `.env` file in backend directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Madhan@41310
DB_NAME=charity_donation_portal
JWT_SECRET=1d78e82ccc7bf74fbe1d4c666f70d1e8
PORT=3000
```

#### Start Backend Server

```bash
npm run build
npm start
```

### 3. Frontend Setup

#### Install Frontend Dependencies

```bash
cd frontend
npm install
```

#### Start Development Server

```bash
node_modules\.bin\ng serve
```

## Usage

1. **Register**: Create an account as either NGO or Donor
2. **Login**: Use your credentials to access the platform
3. **NGO Dashboard**:
   - Create donation requests
   - Manage existing donations
   - View contribution statistics
4. **Donor Dashboard**:
   - Browse available donations
   - Track contribution history
   - View personal statistics
5. **Leaderboard**: View top contributors and rankings

## API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Donations

- `GET /api/donations` - Get all donations
- `GET /api/donations/:id` - Get donation by ID
- `POST /api/donations` - Create new donation (NGO only)
- `PUT /api/donations/:id` - Update donation (NGO only)
- `DELETE /api/donations/:id` - Cancel donation (NGO only)

### Contributions

- `GET /api/contributions/donor/:donorId` - Get donor contributions
- `GET /api/contributions/donation/:donationId` - Get donation contributions
- `POST /api/contributions` - Create contribution (Donor only)
- `PUT /api/contributions/:id/status` - Update contribution status

## Database Schema

### Users Table

- id (Primary Key)
- name
- email
- password (hashed)
- role (NGO/Donor)
- created_at

### Donations Table

- id (Primary Key)
- ngo_id (Foreign Key)
- donation_type
- quantity_or_amount
- location
- pickup_date_time
- status
- priority
- description
- created_at

### Contributions Table

- id (Primary Key)
- donation_id (Foreign Key)
- donor_id (Foreign Key)
- contribution_amount
- notes
- status
- created_at

## Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- Role-based access control
- Input validation and sanitization
- CORS protection

## Development

### Backend Development

```bash
cd backend
npm run dev  # Uses nodemon for auto-restart
```

### Frontend Development

```bash
cd frontend
node_modules\.bin\ng serve
```

## Production Deployment

### Backend

```bash
cd backend
npm run build
npm start
```

### Frontend

```bash
cd frontend
ng build --configuration production
```

Deploy the `dist/frontend` directory to your web server.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For any issues or questions, please contact the development team.

## Contact

### Project Lead

#### Madhan Mohan Reddy

- Email: [madhanmohanreddyperam06@gmail.com](mailto:madhanmohanreddyperam06@gmail.com)
- Mobile: +91 9110395993

### Team Members

- **Narukula Chiru Venkata Mohan**
  - Email: [chiruvenkat09@gmail.com](mailto:chiruvenkat09@gmail.com)
- **Nikhilashree**
  - Email: [nikilashree.m@gmail.com](mailto:nikilashree.m@gmail.com)

### Get Support

For any technical issues, feature requests, or questions, please don't hesitate to reach out to our development team. We're committed to providing timely assistance and continuously improving the platform.

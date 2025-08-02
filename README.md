# 🚗 SmartParking – Full Stack Parking Slot Management System

A complete smart parking system with **Spring Boot (Backend)** and **React + Tailwind CSS (Frontend)**. Supports **JWT-based authentication**, **admin & user roles**, real-time **slot booking**, **fare calculation**, and **late checkout penalties**.

---

## ✅ Features

### 🔐 Authentication & Authorization
- User registration and login with **JWT authentication**
- Role-based access: **Admin** and **User**
- Secure API access for authorized users only

### 👤 User Management
- Users can **view and update their profile** (e.g., name, phone number, vehicle type)
- Passwords stored securely using **BCrypt hashing**
- JWT token-based session management

### 🅿️ Parking Slot Management
- **Admin** can:
  - Create new parking slots with: `slotId`, `slotNumber`, `location`, `vehicleType` (car/bike), `fareAmount`
  - Monitor bookings (future enhancement)
- **User** can:
  - View available slots (filtered by `location` and `vehicleType`)
  - Book or cancel a parking slot
  - Check-in and check-out with real-time tracking
  - Fare automatically calculated based on reserved hours and vehicle type
  - **Late checkout penalty** applied

### 💵 Fare & Transaction Handling
- ₹20/hour for **bike**, ₹40/hour for **car**
- Auto fare calculation based on:
  - Booking duration
  - Actual check-in and check-out time
  - Penalty if checkout is late
- Transaction-safe checkout using Spring’s `@Transactional` for consistency

---

## 🌐 Frontend – SmartParking React App

### 📁 Folder: `Frontend/`

Built with **React** and **Tailwind CSS** for fast and responsive UI. React Context handles user session & role-based UI.

### ✅ Frontend Features

#### 🔐 Authentication & Role Routing
- Unified login for both **User** and **Admin**
- Redirect to respective dashboards based on role
- JWT token stored in `localStorage`

#### 🧭 Navigation
- **User Pages**:
  - `Home`: Greetings + Logout & Profile Update
  - `Available Slot`:Available Slots
  - `Book Now`: Filter and book slots
  - `My Booking`: View/Cancel/Checkout bookings
  - `Profile`: View/Update User Profile
  - `Logout`:Logout 
- **Admin Pages**:
  - `Add Slots`: Create new slots
  - `View Bookings`: View all user bookings
 - `Available Slot`:Available Slots
#### 🅿️ Slot Booking UX
- Filter by:
  - Location
  - Vehicle type
- Real-time slot availability
- Check-in / Check-out with timing
- Auto fare & penalty display on checkout
- Toast notifications for actions
- Spinner during data fetch



## ✅  Backend Features

### 🔐 Authentication & Authorization
- User registration and login with **JWT authentication**
- Role-based access: **Admin** and **User**
- Secure API access for authorized users only

### 👤 User Management
- Users can **view and update their profile** (e.g., name, phone number, vehicle type)
- Passwords stored securely using **BCrypt hashing**
- JWT token-based session management

### 🅿️ Parking Slot Management
- **Admin** can:
    - Create new parking slots with: `slotId`, `slotNumber`, `location`, `vehicleType` (car/bike), `fareAmount`
    - Monitor bookings (planned future enhancement)
- **User** can:
    - View available slots (filtered by `location` and `vehicleType`)
    - Book or cancel a parking slot
    - Check-in and check-out with live time tracking
    - Fare automatically calculated based on reserved hours and vehicle type
    - **Late checkout penalty** applied

### 💵 Fare & Transaction Handling
- ₹20/hour for **bike**, ₹40/hour for **car**
- Fare is calculated based on:
    - Booking duration
    - Actual check-in and check-out time
    - Extra charges applied for **late checkout**
- Checkout operations are wrapped in **transactional service methods** to ensure:
    - Consistent updates to `booking`, `slot`, and `user` data
    - Prevention of race conditions or partial updates
- Database operations (booking, slot status updates, fare calculation) are atomic using `@Transactional` in service layer

---

## 🛢️ Database & ORM Layer (MySQL + Hibernate + JPA)

### 🔗 Database Used
- **MySQL** is used as the relational database
- Project uses **Spring Data JPA (Java Persistence API)** for ORM
- Underlying ORM provider: **Hibernate**

### ⚙️ ORM Configuration
- All entities (`User`, `Slot`, `Booking`, etc.) are mapped using `@Entity` annotations
- Relationships:
    - One-to-Many: `User` ↔ `Booking`
    - Many-to-One: `Booking` → `Slot`, `Booking` → `User`
- Fetch types and cascading are configured to avoid infinite loops and maintain referential integrity

### 📦 JPA Features Used
- `JpaRepository` for CRUD operations
- Custom queries using method names (e.g., `findByLocationAndVehicleTypeAndIsAvailable`)
- Transaction management using `@Transactional` on service methods
- Automatic table creation handled via:
    ```properties
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.datasource.url=jdbc:mysql://localhost:3306/parkandride
    ```

### 🧾 Tables in DB
| Table       | Description                          |
|-------------|--------------------------------------|
| `users`     | Stores user data (admin + user)      |
| `slots`     | Parking slot details                 |
| `bookings`  | Booking records, checkin/checkout    |

---

## 🧠 Advanced Design Highlights

- Clean architecture with separation of concerns (Controller, Service, Repository)
- Error handling with meaningful HTTP status codes
- Secure and RESTful design principles
- Modular code for future integration with ride booking (Uber/Ola-like)

---

## 🚀 Getting Started

To get started with this project, ensure you have **Java**, **MySQL**, and **Maven** installed on your system.


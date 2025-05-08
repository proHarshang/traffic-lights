# Traffic Lights Management System
This project is a Traffic Lights Management System designed to simulate and manage traffic light configurations for different types of intersections. It includes a frontend for user interaction and a backend for managing configurations and data.

### Table of Contents
1. Features
2. Technologies Used
3. Project Structure
4. Setup Instructions
5. Usage
6. API Endpoints
7. Contributing
8. License

### Features: 

1. Dynamic Traffic Light Simulation:
Supports multiple intersection types (e.g., 3-way, 4-way, 5-way).
Real-time traffic light changes with configurable durations.

2. Configuration Management:
Configure signal times for each intersection type.
Save configurations to the backend.

3. Emergency Mode:
All lights turn red during emergencies.

4. Modern UI: 
Built with modern UI frameworks Shadcn for a seamless user experience.

### Technologies Used: 
#### Frontend:
- React with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Zod for form validation
- React Hook Form for form management
#### Backend:
- Node.js with TypeScript
- Prisma as the ORM
- SQLite as the database (can be switched to other databases)
- Express.js for API routing

### Setup Instructions:
Prerequisites
- Node.js (v16 or higher)
- pnpm (preferred package manager)
- SQLite (or any other database supported by Prisma)

### Steps: 
1. Clone the Repository:
git clone https://github.com/your-repo/traffic-lights.git
cd traffic-lights

2. Install Dependencies: 
- Frontend
cd frontend
pnpm install

- Backend
cd backend
pnpm install

3. Set Up the Database:
pnpm prisma migrate dev

4. Start the Backend and Frontend:
pnpm dev

5. Access the Application:
Open your browser and navigate to http://localhost:5173


### Usage: 
1. Configuring Signal Times:
- Select the intersection type (e.g., 3-way, 4-way).
- Click on "Configure Signal Times."
- Enter the desired durations for each signal and save.

2. Resetting the System:
- Click the "Reset" button to reset the traffic light simulation.

3. Emergency Mode:
- Trigger emergency mode to turn all lights red.

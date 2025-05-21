# Career Counseling – MERN Stack

## 📌 About the Project

The **Career Counseling Platform** is a dynamic web application focused on enhancing communication between mentees and mentors. Mentees can ask career-related questions, and mentors can respond with helpful answers. The platform also includes a dedicated **blog section**, where mentees can share their personal experiences to guide others. It is built using the **MERN stack**: MongoDB, Express.js, React.js, and Node.js, providing a responsive and scalable solution for career guidance.

---

## ⚙️ Features

- 🧑‍🏫 Mentor–mentee question and answer functionality  
- 📝 Experience sharing blog by mentees  
- 🔐 User authentication and secure login system  
- ⚡ Dynamic React frontend with real-time updates  
- 🗄️ MongoDB database integration via Mongoose  

---

## 🚀 How to Run the Project

1. Clone the repository:  
   `git clone https://github.com/harshith046/Career-Counseling-using-MERN-stack.git`  
   `cd Career-Counseling-using-MERN-stack`

   Split your terminal into two and navigate to the `frontend` and `backend` folders:  
   In one terminal: `cd frontend`  
   In the other terminal: `cd backend`

2. Install dependencies in both the frontend and backend directories:  
   `npm install`  (or use `npm i`)
   
3. To set up the database, in the backend terminal, install the MongoDB package:  
   `npm install mongodb`  
   Then open the `db.js` file in the backend folder and update,
   `const mongoURI = "your_mongodb_connection_string_here";`
   
4. Now start the backend server:  
   `npm start`  ->  Make sure it connects to the database successfully.
   
   Run the frontend in the other terminal:  
   `npm start`  
   The frontend will launch at `http://localhost:3000`, while the backend typically runs at `http://localhost:5000`.
   
   ---

## 🧠 Tech Stack

- **Frontend**: React.js, JavaScript, HTML, CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose  
- **HTTP Client**: Axios  

---

## 🤝 Contributing

Contributions are welcome! Fork the repository, make your changes in a new branch, and submit a pull request. Whether it's fixing bugs, improving UI, or adding features, your input is appreciated.

---


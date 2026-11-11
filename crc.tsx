"use client";

const COURSES=[
 {c:'Full Stack',i:'🧩',t:'MERN Full Stack',d:'6 months',l:'Beginner',m:'Classroom / Online',x:'React, Node, MongoDB with live projects.'},
 {c:'Full Stack',i:'☕',t:'Java Full Stack',d:'6 months',l:'Beginner',m:'Classroom / Online',x:'Java, Spring Boot, React and SQL.'},
 {c:'Cloud & DevOps',i:'☁️',t:'AWS with DevOps',d:'4 months',l:'Intermediate',m:'Classroom / Online',x:'AWS, Docker, Kubernetes, CI/CD pipelines.'},
 {c:'Cloud & DevOps',i:'🔷',t:'Azure Training',d:'3 months',l:'Beginner',m:'Online',x:'Azure fundamentals to certification prep.'},
 {c:'Data & AI',i:'🤖',t:'Data Science & AI',d:'6 months',l:'Beginner',m:'Classroom / Online',x:'Python, ML and real-world AI projects.'},
 {c:'Data & AI',i:'📊',t:'Power BI & Tableau',d:'2 months',l:'Beginner',m:'Classroom / Online',x:'Dashboards and business analytics.'},
 {c:'Testing',i:'🧪',t:'Selenium Testing',d:'3 months',l:'Beginner',m:'Classroom / Online',x:'Manual and automation testing skills.'},
 {c:'Programming',i:'🐍',t:'Python Programming',d:'2 months',l:'Beginner',m:'Classroom / Online',x:'From basics to automation and APIs.'}];
const CATS=['All',...new Set(COURSES.map(c=>c.c))];


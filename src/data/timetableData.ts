export interface ClassEntry {
  id: string;
  day: string;
  time: string;
  subject: string;
  teacher: string;
  room: string;
  type: "Lecture" | "Lab" | "Tutorial";
}

export const timetableData: ClassEntry[] = [
  // Monday
  { id: "1", day: "Monday", time: "09:00 - 10:30", subject: "Data Structures", teacher: "Dr. Sarah Johnson", room: "CS-101", type: "Lecture" },
  { id: "2", day: "Monday", time: "11:00 - 12:30", subject: "Web Development", teacher: "Prof. Michael Chen", room: "CS-205", type: "Lab" },
  { id: "3", day: "Monday", time: "14:00 - 15:30", subject: "Database Systems", teacher: "Dr. Emily White", room: "CS-102", type: "Lecture" },
  
  // Tuesday
  { id: "4", day: "Tuesday", time: "09:00 - 10:30", subject: "Algorithms", teacher: "Dr. Robert Lee", room: "CS-103", type: "Lecture" },
  { id: "5", day: "Tuesday", time: "11:00 - 12:30", subject: "Data Structures", teacher: "Dr. Sarah Johnson", room: "CS-Lab-1", type: "Lab" },
  { id: "6", day: "Tuesday", time: "14:00 - 15:30", subject: "Operating Systems", teacher: "Prof. James Brown", room: "CS-104", type: "Tutorial" },
  
  // Wednesday
  { id: "7", day: "Wednesday", time: "09:00 - 10:30", subject: "Web Development", teacher: "Prof. Michael Chen", room: "CS-205", type: "Lecture" },
  { id: "8", day: "Wednesday", time: "11:00 - 12:30", subject: "Software Engineering", teacher: "Dr. Lisa Anderson", room: "CS-105", type: "Lecture" },
  { id: "9", day: "Wednesday", time: "14:00 - 15:30", subject: "Algorithms", teacher: "Dr. Robert Lee", room: "CS-Lab-2", type: "Lab" },
  
  // Thursday
  { id: "10", day: "Thursday", time: "09:00 - 10:30", subject: "Database Systems", teacher: "Dr. Emily White", room: "CS-Lab-3", type: "Lab" },
  { id: "11", day: "Thursday", time: "11:00 - 12:30", subject: "Operating Systems", teacher: "Prof. James Brown", room: "CS-104", type: "Lecture" },
  { id: "12", day: "Thursday", time: "14:00 - 15:30", subject: "Software Engineering", teacher: "Dr. Lisa Anderson", room: "CS-105", type: "Tutorial" },
  
  // Friday
  { id: "13", day: "Friday", time: "09:00 - 10:30", subject: "Computer Networks", teacher: "Dr. David Kim", room: "CS-106", type: "Lecture" },
  { id: "14", day: "Friday", time: "11:00 - 12:30", subject: "Web Development", teacher: "Prof. Michael Chen", room: "CS-Lab-1", type: "Lab" },
  { id: "15", day: "Friday", time: "14:00 - 15:30", subject: "Computer Networks", teacher: "Dr. David Kim", room: "CS-Lab-2", type: "Lab" },
];

export const subjects = [
  { name: "Data Structures", code: "CS-201", credits: 4, description: "Study of fundamental data structures and their applications." },
  { name: "Web Development", code: "CS-220", credits: 3, description: "Modern web technologies including HTML, CSS, JavaScript, and frameworks." },
  { name: "Database Systems", code: "CS-230", credits: 4, description: "Database design, SQL, and database management systems." },
  { name: "Algorithms", code: "CS-240", credits: 4, description: "Algorithm design, analysis, and computational complexity." },
  { name: "Operating Systems", code: "CS-250", credits: 4, description: "OS concepts, process management, and system architecture." },
  { name: "Software Engineering", code: "CS-260", credits: 3, description: "Software development methodologies and project management." },
  { name: "Computer Networks", code: "CS-270", credits: 3, description: "Network protocols, architecture, and communication systems." },
];

export const teachers = [
  { name: "Dr. Sarah Johnson", department: "Computer Science", email: "sarah.johnson@university.edu", specialization: "Data Structures & Algorithms" },
  { name: "Prof. Michael Chen", department: "Computer Science", email: "michael.chen@university.edu", specialization: "Web Technologies" },
  { name: "Dr. Emily White", department: "Computer Science", email: "emily.white@university.edu", specialization: "Database Systems" },
  { name: "Dr. Robert Lee", department: "Computer Science", email: "robert.lee@university.edu", specialization: "Algorithm Design" },
  { name: "Prof. James Brown", department: "Computer Science", email: "james.brown@university.edu", specialization: "Operating Systems" },
  { name: "Dr. Lisa Anderson", department: "Computer Science", email: "lisa.anderson@university.edu", specialization: "Software Engineering" },
  { name: "Dr. David Kim", department: "Computer Science", email: "david.kim@university.edu", specialization: "Computer Networks" },
];

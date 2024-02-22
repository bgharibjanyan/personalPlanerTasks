
  const employees = [
    {
      id: 1,
      name: "Aram Miqaelyan",
      age: 30,
      department: "development",
      role: { title: "Frontend Developer", level: "junior" },
      contact: { email: "aram.meliqyan@coderepublic.am", phone: "123-456-7890" },
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      id: 2,
      name: "Lily Azatyan",
      age: 28,
      department: "Design",
      role: { title: "team leader", level: "Senior" },
      contact: { email: "lily.azatyan@coderepublic.am", phone: "098-765-4321" },
      skills: ["OOAD", "comunication", "problem Solving"]
    },
    {
      id: 3,
      name: "Bagrat Gharibjanyan",
      age: 28,
      department: "development",
      role: { title: "android developer", level: "junior" },
      contact: { email: "bagrat.gharibjanyan@coderepublic.am", phone: "+374-98-53-63-89" },
      skills: ["vue", "flutter", "PHP"]
    },
    {
      id: 4,
      name: "Anahit Karapetyan",
      age: 28,
      department: "development",
      role: { title: "Beck ender", level: "junior" },
      contact: { email: "anahit.karapetyan@coderepublic.am", phone: "098-765-4321" },
      skills: ["nodeJS", "SQL", "big Data"]
    },
    {
      id: 5,
      name: "Aram Vardevanyan",
      age: 28,
      department: "development",
      role: { title: "frontender", level: "junior" },
      contact: { email: "aram.vardevanyan@coderepublic.am", phone: "098-765-4321" },
      skills: ["html", "CSS", "JS"]
    },
    
  ];

  const tableBody = document.getElementById('tableBody');

  function initEmployeesData() {
    employees.forEach(employee => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.department}</td>
        <td>${employee.role.title}</td>
        <td>${employee.role.level}</td>
        <td><a href='mailto:${employee.contact.email}'>${employee.contact.email}</a></td>
        <td><a href='tel:${employee.contact.phone}'>${employee.contact.phone}</a></td>
        <td>${employee.skills.join(', ')}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  initEmployeesData();

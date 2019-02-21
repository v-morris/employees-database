employees = Employee.create!([
  {
    id: 1,
    first_name: "Dade",
    last_name: "Murphy",
    title: "CEO",
    manager_id: nil
  },
  {
    id: 2,
    first_name: "Kate",
    last_name: "Libby",
    title: "CTO",
    manager_id: 1
  },
  {
    id: 3,
    first_name: "Edward",
    last_name: "Vedder",
    title: "CFO",
    manager_id: 1
  },
  {
    id: 4,
    first_name: "Eugene",
    last_name: "Belfort",
    title: "VP of Public Relations",
    manager_id: 1
  },
  {
    id: 5,
    first_name: "Margo",
    last_name: "Wallace",
    title: "VP of Engineering",
    manager_id: 2
  },
  {
    id: 6,
    first_name: "Richard",
    last_name: "Gill",
    title: "Public Relations Manager",
    manager_id: 4
  },
  {
    id: 7,
    first_name: "Emmanuel",
    last_name: "Goldstein",
    title: "Lead Software Engineer",
    manager_id: 5
  },
  {
    id: 8,
    first_name: "Paul",
    last_name: "Cook",
    title: "Software Engineer",
    manager_id: 5
  },
  {
    id: 9,
    first_name: "Joey",
    last_name: "Pardella",
    title: "Junior Software Engineer",
    manager_id: 8
  },
  {
    id: 10,
    first_name: "Agnes",
    last_name: "Pardella",
    title: "Project Manager",
    manager_id: 4
  },
  {
    id: 11,
    first_name: "Ramon",
    last_name: "Sanches",
    title: "Software Engineer",
    manager_id: 8
  }
])
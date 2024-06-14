import React, { useState } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const EnquiryPage: React.FC = () => {
  const [activePage, setActivePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const data = [
    [
      { id: 1, name: 'Satish Kumar Chandu', experience: 'Three years', technologies: 'HTML, CSS, JS, Bootstrap, ReactJs', email: 'bnvschandu@gmail.com', contact: '+91-9989305241' },
      { id: 2, name: 'Mohammed Hussain', experience: 'Five years', technologies: 'HTML, CSS, JS, Java Spring Boot, MongoDB', email: 'hussain@gmail.com', contact: '+91-9886655321' },
      { id: 3, name: 'Priyanshu Chowdary', experience: 'Four years', technologies: 'Core Java, Selenium, HTML, CSS', email: 'priyansh@gmail.com', contact: '+91-7788665544' },
    ],
    [
      { id: 1, name: 'Ravi Kumar', experience: 'Ten years', technologies: 'HTML, CSS, JS, JQuery, Angular, Java, Bootstrap, ReactJs', email: 'ravi@gmail.com', contact: '+91-9987653201' },
      { id: 2, name: 'Franklin', experience: 'Seven years', technologies: 'HTML, CSS, JS, Java Spring, Sql, ML', email: 'franklin@gmail.com', contact: '+91-9886654321' },
      { id: 3, name: 'Sridevi', experience: 'Four years', technologies: 'Core Java, Selenium, HTML, CSS, JS', email: 'sridevi@gmail.com', contact: '+91-7988665544' },
    ],
    [
      { id: 1, name: 'Sasi Kumar', experience: 'Two years', technologies: 'HTML, CSS, JS, Bootstrap, Angular', email: 'sasi@gmail.com', contact: '+91-9988305241' },
      { id: 2, name: 'Naseem Shah', experience: 'Four years', technologies: 'HTML, CSS, Salesforce, ERP', email: 'naseem@gmail.com', contact: '+91-9886654221' },
      { id: 3, name: 'Priya Dasani', experience: 'Five years', technologies: 'Core Java, Selenium, HTML, CSS, JS', email: 'priya@gmail.com', contact: '+91-7799665544' },
    ],
    [
      { id: 1, name: 'Sravan Kumar', experience: 'Three years', technologies: 'HTML, CSS, JS, Bootstrap, ReactJs, Go, Php', email: 'sravan@gmail.com', contact: '+91-9989305214' },
      { id: 2, name: 'Anji', experience: 'Five years', technologies: 'HTML, CSS, JS, Java Spring Boot, MongoDB', email: 'anji@gmail.com', contact: '+91-9876655321' },
      { id: 3, name: 'Priyansh', experience: 'Five years', technologies: 'Java, DotNet, HTML, CSS', email: 'priyansh2@gmail.com', contact: '+91-7788665522' },
    ],
    [
      { id: 1, name: 'Harnith Sharma', experience: 'Six years', technologies: 'HTML, CSS, JS, Bootstrap, ReactJs, Angular, VueJS', email: 'harnith@gmail.com', contact: '+91-9978305241' },
      { id: 2, name: 'Mukesh', experience: 'Three years', technologies: 'HTML, CSS, JS, Java Spring Boot, Sql, ReactJs', email: 'mukesh@gmail.com', contact: '+91-9886645321' },
      { id: 3, name: 'Nithish Gadkari', experience: 'Ten years', technologies: 'DotNet, Sql Server, AWS, Azure,C# ', email: 'nithish@gmail.com', contact: '+91-7788665536' },
    ],
  ];

  const totalPages = data.length;

  const handlePageClick = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  }

  const filteredData = data[activePage - 1].filter(item => 
    item.technologies.toLowerCase().includes(searchQuery)
  );


  return (
    <>
      <div>
        <h2 className='text-center m-2 p-2 border border-4 rounded-4'>Enquiry Page</h2>
        <div className='text-end mb-2'>
          <input 
          type="search" 
          placeholder="Search here..." 
          value={searchQuery}
          onChange={handleSearchChange}
          />
        </div>
        <div>
          <Table responsive="sm">
            <thead className='border border-3'>
              <tr>
                <th>Sl.No</th>
                <th>Name of the expert</th>
                <th>Working Experience</th>
                <th>Technolgies known</th>
                <th>Email address</th>
                <th>Contact No</th>
              </tr>
            </thead>
            <tbody className='border border-3'>
             {filteredData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.experience}</td>
                <td>{item.technologies}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
              </tr>
             ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="d-flex justify-content-center">
      <Pagination size="sm">
        {Array.from({length: totalPages}, (_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === activePage}
              onClick={() => handlePageClick(i+1)}
            >
              {i + 1}
            </Pagination.Item>
        ))}
      </Pagination>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default EnquiryPage;
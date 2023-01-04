import React, { useEffect, useState } from "react";
import "./Userview.scss";
import { BsFilter } from "react-icons/bs";
import mockData from "../pages/mockData";
import { SingleList } from "./SingleList";
import ReactPaginate from "react-paginate";

export const Userview = () => {
  const [active, setActive] = useState(false);

  //state for page handling
  const [users, setUsers] = useState(mockData);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);

  //state if api call fails
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetchreq();
  }, []);
  
  //props interface
  interface Props {
    selected: number;
  }
  const changePage = ({ selected }: Props) => {
    setPageNumber(selected);
  };

  const toggleForm = () => {
    setActive((prev) => !prev);
  };

  //fetch users Logic
  const fetchreq = () => {
    
   
    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error Occured');
        }
      })
      .then((data) => setUsers(data))
      .then((data) => {
        return setLoading(false);
      })
      .catch( (error)=>{
        console.log("code here")
        return setLoading(false);
        
      }
        
      )
        
      
  };
 

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      const swap = user.createdAt.replace('T', ' ').replace('Z', '')
      
      return (
        <SingleList
          key={user.accountNumber}
          organization={user.orgName}
          username={user.userName}
          email={user.email}
          phoneNumber={user.phoneNumber}
          dateJoined={swap}
        />
      );
    });

    if(Loading){
      return (<h1>Data Loading</h1>)
    }

  return (
    <div>
      <div className="userview-form">
        <table>
          <thead>
            <tr>
              <th className="main-header" onClick={toggleForm} scope="col">
                ORGANIZATION <BsFilter />
              </th>
              <th className="main-header" onClick={toggleForm} scope="col">
                USERNAME <BsFilter />
              </th>
              <th className="main-header" onClick={toggleForm} scope="col">
                EMAIL <BsFilter />
              </th>
              <th className="main-header" onClick={toggleForm} scope="col">
                PHONE NUMBER <BsFilter />
              </th>
              <th className="main-header" onClick={toggleForm} scope="col">
                {" "}
                DATE JOINED <BsFilter />
              </th>
              <th className="main-header" onClick={toggleForm} scope="col">
                STATUS <BsFilter />
              </th>
            </tr>
          </thead>
          <tbody>{displayUsers}</tbody>
        </table>
        {
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"previous"}
            nextLinkClassName={"next"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        }
      </div>

      <div className={active ? "user-form" : "user-hide"}>
        <form className="user-filter">
          <p className="user-toggle">
            <label htmlFor="Organization"> Organization</label>
            <input
              type="text"
              placeholder="Select"
              className="user-form--input"
              name="Organization"
              id="organization"
            />
          </p>

          <p className="user-toggle">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Select"
              className="user-form--input"
              name="username"
              id="username"
            />
          </p>

          <p className="user-toggle">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Select"
              className="user-form--input"
              name="email"
              id="email"
            />
          </p>

          <p className="user-toggle">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              placeholder="Select"
              className="user-form--input"
              name="date"
              id="date"
            />
          </p>

          <p className="user-toggle">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              placeholder="Select"
              className="user-form--input"
              name="phone"
              id="phone"
            />
          </p>

          <p className="user-toggle">
            <label htmlFor="status">Status</label>
            <input
              type="text"
              placeholder="Select"
              className="user-form--input"
              name="status"
              id="status"
            />
          </p>

          <button className="reset">Reset</button>
          <button className="submit">Filter</button>
        </form>
      </div>
    </div>
  );
};

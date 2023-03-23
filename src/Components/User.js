import { Outlet } from "react-router-dom";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import store from "../store";
import { fetchStudentData } from "../Redux/Actions/loginAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class User extends React.Component {
  componentDidMount() {
    store.dispatch(fetchStudentData());
    console.log(fetchStudentData);
  }

  render() {
    const { student } = this.props;
    const chk = student.users
    console.log(chk);
    return (
      <>
        <div>
          <div class="p-4 sm:ml-64 mt-10">
            <div class="flex flex-col md:flex-row items-center justify-between mb-4 mt-8">
              <div class="relative mb-4 md:mb-0 md:mr-4">
                {/* <input
                type="text"
                class="bg-gray-200 rounded-full px-4 py-2 pr-8 "
                placeholder="Search..."
              /> */}
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 11h-4V7c0-.55-.45-1-1-1s-1 .45-1 1v4H7c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1v-4h4c.55 0 1-.45 1-1s-.45-1-1-1z" />
                  </svg>
                </button>
              </div>
              <div class="relative mb-4 md:mb-0 md:ml-4 flex-1">
                {/* <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full w-full md:w-auto">
                Filter
              </button> */}
              </div>

              <button
                class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                <Link to="/Adduser">Add User</Link>
              </button>
            </div>

            <div class="overflow-x-auto">
              <table class="table-auto w-full border-collapse">
                <thead class="bg-gray-200">
                  <tr>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Lastname</th>
                    <th class="px-4 py-2">Age</th>
                    <th class="px-4 py-2">Email</th>
                    <th class="px-4 py-2">Phone</th>
                    <th class="px-4 py-2">Role</th>
                    <th class="px-4 py-2">Action</th>
                  </tr>
                </thead>

                <tbody class="text-gray-700">
                  {chk.length > 0
                    ? chk.map((data) => (
                        <tr>
                          <td class="border px-4 py-2">{data.name}</td>
                          <td class="border px-4 py-2">{data.lastname}</td>
                          <td class="border px-4 py-2">{data.age}</td>
                          <td class="border px-4 py-2">{data.email}</td>
                          <td class="border px-4 py-2">{data.phone}</td>
                          <td class="border px-4 py-2">{data.role}</td>
                          <td class="border px-4 py-2">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))
                    : ""}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Outlet />
      </>
    );
  }
}

User.propTypes = {
  fetchStudentData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  student: state.loginReducer.student,
});

export default connect(mapStateToProps, { fetchStudentData })(User);

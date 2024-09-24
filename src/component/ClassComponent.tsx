import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
interface IUser{
  empname: string,
  address: string,
  phone: number
}
interface IUser1{
  empname: string,
  address: string,
  phone: number
}
interface UserSub{
  iusers:IUser[],
  iusers2:IUser1[]
}
export default class Users extends React.Component<UserSub>{
  constructor(props: UserSub){
  super(props)
  }
  render(): React.ReactNode{
  return(
          <>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='text-center'>
                  <div className='card p-3'>
                    <div className='card-body'>
                      <table className='table table-primary table-stripped table-bordered'>
                        <thead>
                          <tr>
                            <th>Sl no</th>
                            <th>Emp Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.props.iusers.map((user, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{user.empname}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                          </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
  }
}
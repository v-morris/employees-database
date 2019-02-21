import React from 'react'
import '../App.css'

const Root = ({ root }) =>

  <div>
<ul>
    <li key={root.id}><h6>ID: </h6> {root.id} <h6>Name: </h6> {root.first_name} {root.last_name} <h6>Title: </h6> {root.title}</li>
    {root.subordinates.map(function (sub) { //CEO SUBS
      return (<ul> <li key={sub.id}><h6>ID: </h6> {sub.id} <h6>Name: </h6> {sub.first_name} {sub.last_name} <h6>Title: </h6> {sub.title} <h6>Manager ID: </h6> {sub.manager_id}</li>
        {sub.subordinates.map(function (sub2) { //LAYER 3
          return (<ul><li key={sub2.id}><h6>ID: </h6> {sub2.id} <h6>Name: </h6> {sub2.first_name} {sub2.last_name} <h6>Title: </h6> {sub2.title} <h6>Manager ID: </h6> {sub2.manager_id}</li>
            {sub2.subordinates.map(function (sub3) { //LAYER 4
              return (<ul> <li key={sub3.id}><h6>ID: </h6> {sub3.id} <h6>Name: </h6> {sub3.first_name} {sub3.last_name} <h6>Title: </h6> {sub3.title} <h6>Manager ID: </h6> {sub3.manager_id} </li>
                {sub3.subordinates.map(function (sub4) {  //LAYER 
                  return (<ul> <li key={sub4.id}><h6>ID: </h6> {sub4.id} <h6>Name: </h6> {sub4.first_name} {sub4.last_name} <h6>Title: </h6> {sub4.title} <h6>Manager ID: </h6> {sub4.manager_id}</li>
                    {sub4.subordinates.map(function (sub5) {  //LAYER 
                      return (<ul> <li key={sub5.id}><h6>ID: </h6> {sub5.id} <h6>Name: </h6> {sub5.first_name} {sub5.last_name} <h6>Title: </h6> {sub5.title} <h6>Manager ID: </h6> {sub5.manager_id}</li>
                      </ul>
                      )
                    })}
                  </ul>
                  )
                })}
              </ul>
              )
            })}
          </ul>
          )
        })}
      </ul>
      )
    })}
    </ul>
  </div>

export default Root
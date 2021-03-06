import React from 'react'
import { Link } from 'react-router-dom'

import styles from './index.css'


export default class LoginPage extends React.Component{
    
    render() {
        let { purchasedCourses, email, getCourse } = this.props
        purchasedCourses = purchasedCourses.map( course => {
            const coursePath = course.split(' ').join('-')
            return (
                <ul  onClick={()=> getCourse(coursePath)}>
                    <Link to={`course/${coursePath}`} style={{color:'lightGray'}}>
                        {course}
                    </Link>
                </ul>
            )
        })
        return (
          <div className='profile-container'>
            <div className='avatar-container'>
                
            </div>
            <br />
            <div className='info-container'>
                <div className='username'>
                    <span>Username: </span>
                    <span>{ email }</span>
                </div>
                Purchased Courses:
                <li className='courses'>
                    { purchasedCourses }
                </li>
            </div>
          </div>
        )
    }
}
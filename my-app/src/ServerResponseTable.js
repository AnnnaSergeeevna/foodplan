import React, { useRef } from 'react';
import "./UI.css";
import { CSSTransition } from 'react-transition-group';


const ServerResponseTable = ({ responseData }) => {
  const tableRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={tableRef}
      in={true}
      appear={true}
      timeout={400}
      classNames="slide-in-fwd-center"
    >
      <table ref={tableRef} className="table">
        <tbody>
          {responseData.dayToFoods.map((dayFood, index) => (
            <tr key={index}>
              <td className="day">Day {dayFood.day}</td>
              <td colSpan="4">
                <table>
                  <tbody className="tableBody">
                    <tr>
                      <td className="name">{dayFood.foods[0].name}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Protein:</td>
                      <td>{dayFood.dayStats.protein}</td>
                    </tr>
                    <tr>
                      <td>Fat:</td>
                      <td>{dayFood.dayStats.fat}</td>
                    </tr>
                    <tr>
                      <td>Carbs:</td>
                      <td>{dayFood.dayStats.carbs}</td>
                    </tr>
                    <tr>
                      <td>Calories:</td>
                      <td>{dayFood.dayStats.ccal}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CSSTransition>
  );
};

export default ServerResponseTable;




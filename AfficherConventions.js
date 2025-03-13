import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function AfficherConventions() {
    const state = useSelector((state) => state) ;
    const navigate = useNavigate() ;
  return (
    <>
      <header
        style={{ padding: "10px 10px 0 calc(50% - 88px) " }}
        className="bg-primary text-light d-flex justify-content-between align-items-center">
        <h3 className="text-center">قائمة الاتفاقيات</h3>
        <i onClick={() => navigate("/Home")} style={{"cursor":"pointer"}} className="bi bi-house-door h3 "></i>
      </header>
      <main>
        <nav className="d-flex justify-content-center my-4"  aria-label="Page navigation example ">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                التالي
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                8
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                7
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                6
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                5
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                4
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">
                    2
                </a>
            </li>
            <li class="page-item">
              <a class="page-link active" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link text-secondary" href="#">
                السابق
              </a>
            </li>
          </ul>
        </nav>
        <table className="table table-bordered table-striped">
            <thead className="table-primary">
                <tr>
                    <th>الاجراءات</th>
                    <th>وضعية الاتفاقية</th>
                    <th>الملاحظات</th>
                    <th>نسبة تقدم الاشتغال</th>
                    <th>مساهمة الجهة</th>
                    <th>الكلفة الاجمالية</th>
                    <th>الهدف من الاتفاقية</th>
                    <th>موضوع الاتفاقية</th>
                    <th>صاحب المشروع</th>
                    <th>الجماعة المستفيدة</th>
                    <th>رقم الاتفاقية</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.conventions.map((ele,index) => {
                        return(
                            <tr>
                                <td><button className="btn btn-primary">الاطلاع على الاتفاقية</button></td>
                                <td>{ele["وضعية الاتفاقية"]}</td>
                                <td>{ele["الملاحظات"]}</td>
                                <td>{ele["نسبة تقدم الاشتغال"]}</td>
                                <td>{ele["مساهمة الجهة"]}</td>
                                <td>{ele["الكلفة الاجمالية"]}</td>
                                <td>{ele["الهدف من الاتفاقية"]}</td>
                                <td>{ele["موضوع الاتفاقية"]}</td>
                                <td>{ele["صاحب المشروع"]}</td>
                                <td>{ele["الجماعة المستفيدة"]}</td>
                                <td>{ele["رقم الاتفاقية"]}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </main>
    </>
  );
}

export default AfficherConventions;

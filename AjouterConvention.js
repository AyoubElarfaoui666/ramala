import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 2%;
  text-align: center;
`;

const Body = styled.main`
  padding: 2% 3%;
  background-color: rgb(246, 244, 244);
`;
const Form = styled.div`
  max-width: 800px;
  background-color: white;
  border-radius: 15px;
  margin: auto;
  padding: 30px;
`;

function AjouterConvention() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();
  const ref10 = useRef();
  const ref11 = useRef();

  const refs = [
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    ref7,
    ref8,
    ref9,
    ref10,
    ref11,
  ];
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "addConvention",
      payload: {
        "الجماعة المستفيدة": refs[0].current.value,
        "موضوع الاتفاقية": refs[1].current.value,
        "الكلفة الاجمالية": refs[2].current.value,
        "نسبة تقدم الاشتغال": refs[3].current.value, // Corrected index
        "رقم الاتفاقية": refs[4].current.value, // Corrected index
        "صاحب المشروع": refs[5].current.value,
        "الهدف من الاتفاقية": refs[6].current.value,
        "مساهمة الجهة": refs[7].current.value,
        "الملاحظات": refs[8].current.value,
        "وضعية الاتفاقية": refs[9].current.value,
        "تحميل الاتفاقية": refs[10].current.value, // Corrected key
      },
    });
    refs.forEach((ele) => {
      ele.current.value = "";
    });
  };
  return (
    <div>
      <Header className="bg-primary">
        <button
          onClick={() => {
            navigate("/Home");
          }}
          className="btn btn-outline-light">
          <i className="bi bi-box-arrow-left"></i> خروج
        </button>
        <div>
          <img
            width="80px"
            src="royaume-du-maroc-kingdom-of-morocco.webp"
            alt="Moroccan Emblem"
          />
          <p>وزارة الداخلية</p>
          <p>اقليم الفقيه بن صالح</p>
        </div>
        <p>{state.userName}: admin</p>
      </Header>
      <Body>
        <h2 className="text-center text-primary fw-bold mb-5 ">
          إضافة اتفاقية جديدة
        </h2>
        <Form className="shadow">
          <div className="row p-2 text-end">
            <div className="col-lg-6 col-md-6 col-md-12">
              <div class="mb-3">
                <label dir="rtl" for="exampleInputEmail1" class="form-label">
                  الجماعة المستفيدة
                </label>
                <input
                  ref={refs[0]}
                  dir="rtl"
                  type="text"
                  placeholder="أدخل اسم الجماعة"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label dir="rtl" for="exampleInputPassword2" class="form-label">
                  موضوع الاتفاقية
                </label>
                <textarea
                  ref={refs[1]}
                  dir="rtl"
                  type="text"
                  placeholder="أدخل موضوع الاتفاقية"
                  class="form-control"
                  id="exampleInputPassword2"
                />
              </div>
              <div class="mb-3">
                <label dir="rtl" for="exampleInputEmail3" class="form-label">
                  الكلمة الاجمالية
                </label>
                <input
                  ref={refs[2]}
                  dir="rtl"
                  type="text"
                  placeholder="أدخل الكلمة الاجمالية"
                  class="form-control"
                  id="exampleInputEmail3"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label dir="rtl" for="exampleInputPassword4" class="form-label">
                  نسبة تقدم الاشتغال
                </label>
                <input
                  ref={refs[3]}
                  dir="rtl"
                  type="text"
                  placeholder="أدخل النسبة"
                  class="form-control"
                  id="exampleInputPassword4"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-md-12">
              <div class="mb-3">
                <label dir="rtl" for="exampleInputEmail5" class="form-label">
                  رقم الاتفاقية
                </label>
                <input
                  ref={refs[4]}
                  dir="rtl"
                  type="text"
                  placeholder="ادخل رقم الاتفاقية"
                  class="form-control"
                  id="exampleInputEmail5"
                  aria-describedby="emailHelp"
                />
              </div>
              <div style={{ paddingBottom: "40px" }}>
                <label dir="rtl" for="exampleInputPassword6" class="form-label">
                  صاحب المشروع{" "}
                </label>
                <input
                  ref={refs[5]}
                  dir="rtl"
                  type="text"
                  placeholder="أدخل اسم صاحب المشروع"
                  class="form-control"
                  id="exampleInputPassword6"
                />
              </div>
              <div class="mb-3">
                <label dir="rtl" for="exampleInputEmail7" class="form-label">
                  الهدف من الاتفاقية
                </label>
                <input
                  ref={refs[6]}
                  dir="rtl"
                  type="text"
                  placeholder="أدخل الهدف"
                  class="form-control"
                  id="exampleInputEmail7"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label dir="rtl" for="exampleInputPassword8" class="form-label">
                  مساهمة الجهة
                </label>
                <input
                  ref={refs[7]}
                  dir="rtl"
                  type="text"
                  placeholder="أدخل مساهمة الجهة"
                  class="form-control"
                  id="exampleInputPassword8"
                />
              </div>
            </div>
            <div className="col-12">
              <div class="mb-3">
                <label dir="rtl" for="exampleInputPassword2" class="form-label">
                  ملاحظات
                </label>
                <textarea
                  ref={refs[8]}
                  dir="rtl"
                  type="text"
                  placeholder="أدخل الملاحظات"
                  class="form-control"
                  id="exampleInputPassword2"
                />
              </div>
              <div class="mb-3">
                <label dir="rtl" for="exampleInputPassword8" class="form-label">
                  وضعية الاتفاقية
                </label>
                <input
                  ref={refs[9]}
                  dir="rtl"
                  type="text"
                  placeholder="أدخل وضعية الاتفاقية"
                  class="form-control"
                  id="exampleInputPassword8"
                />
              </div>
              <div class="mb-3">
                <label dir="rtl" for="exampleInputPassword8" class="form-label">
                  {" "}
                  تحميل الاتفاقية (PDF)
                </label>
                <input
                  ref={refs[10]}
                  dir="rtl"
                  type="file"
                  class="form-control"
                  id="exampleInputPassword8"
                />
              </div>
              <div className="d-flex gap-2 justify-content-end">
                <button
                  onClick={() => navigate("/Home")}
                  className="btn btn-secondary ">
                  رجوع
                </button>
                <button onClick={handleClick} className="btn btn-primary ">
                  إضافة الاتفاقية
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Body>
    </div>
  );
}

export default AjouterConvention;

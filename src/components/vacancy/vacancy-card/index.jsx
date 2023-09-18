import React from 'react'
import './style.css'
import { WrapperContainer } from '../../../style-app'
import { useDispatch, useSelector } from 'react-redux';
import { VacansyGet } from './../../../redux/vacansy/index';
import { useEffect, useState } from 'react';
import { Button, Modal, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'react-grid-system';
import { VacancyFormPost } from '../../../redux/vacancy-form';
const { TextArea } = Input;


const VacancyCard = () => {
    const [fullname, setFullName] = useState(null)
    const [birthDay, setBirthDay] = useState(null)
    const [place, setPlace] = useState(null)
    const [status, setStatus] = useState(null)
    const [phone, setPhone] = useState(null)
    const [education, setEducation] = useState(null)
    const [workplace1, setWorkPlace1] = useState(null)
    const [workplace2, setWorkPlace2] = useState(null)
    const [workplace3, setWorkPlace3] = useState(null)
    const [language, setLanguage] = useState(null)
    const [comment, setComment] = useState(null)

    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(VacansyGet())
    }, [])

    const vacansyGetState = useSelector((state) => state.vacansy.VacansyGets?.data);
    const DateFormat = (date) => {
        var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [day, month, year].join(".");
    };

    const vacansyFormState = useSelector((state) => state.vacansyForm.vacancyFormPost?.Success);
    const HandleVacancyFormPost = async (e) => {
        e.preventDefault()
        const full_name = fullname
        const birth_day = birthDay
        const places = place
        const statuses = status
        const phone_number = phone
        const educations = education
        const work_place1 = workplace1
        const work_place2 = workplace2
        const work_place3 = workplace3
        const languages = language
        const comments = comment

        await dispatch(VacancyFormPost({
            full_name,
            birth_day,
            places,
            statuses,
            phone_number,
            educations,
            work_place1,
            work_place2,
            work_place3,
            languages,
            comments
        }))
        window.location.reload()
    }



    const LangVal = () => {
        return window.localStorage.getItem("i18nextLng");
    };


    return (
        <>
            <div className='vacancy_section'>
                <WrapperContainer>
                    <div className='vacancy_list_wrapp'>
                        <ul className='vacancy_list'>
                            {
                                vacansyGetState.map(elem => (
                                    <>
                                        <li>
                                            <h4> *
                                                {
                                                    LangVal() == "ru"
                                                        ? elem.title_ru
                                                        : LangVal() == "uz"
                                                            ? elem.title_uz
                                                            : LangVal() == "en"
                                                                ? elem.title_en
                                                                : elem.title_ru
                                                }
                                            </h4>
                                            <p className='vacansy_date'>
                                                <span><i class='bx bxs-calendar'></i></span>
                                                {DateFormat(elem.createdAt)}
                                            </p>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        LangVal() == "ru"
                                                            ? elem.description_ru
                                                            : LangVal() == "uz"
                                                                ? elem.description_uz
                                                                : LangVal() == "en"
                                                                    ? elem.description_en
                                                                    : elem.description_ru
                                                }}
                                            />
                                        </li>
                                        <hr />
                                    </>
                                ))
                            }
                        </ul>
                        <div className='vacansy_modal_wrapp'>
                            <Button className='vacansy_modal_btn' onClick={showModal}>
                                {t("Vacansy.0")}
                            </Button>
                            <Modal width={700} footer={false} title={t("Vacansy.1")} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <div className='vacancy_modal_header'>
                                    <p> {t("Vacansy.2")}</p>
                                </div>
                                <div className='vacancy_row_wrapp'>
                                    <form onSubmit={HandleVacancyFormPost}>
                                        <Row className='vacancy_row'>
                                            <Col lg={12} className='vacancy_col'>
                                                <Input onChange={(e) => setFullName(e.currentTarget.value)} placeholder={t("Vacansy.3")} />
                                            </Col>
                                            <Col lg={6} className='vacancy_col'>
                                                <Input onChange={(e) => setBirthDay(e.currentTarget.value)} placeholder={t("Vacansy.4")} />
                                            </Col>
                                            <Col lg={6} className='vacancy_col'>
                                                <Input onChange={(e) => setPlace(e.currentTarget.value)} placeholder={t("Vacansy.5")} />
                                            </Col>
                                            <Col lg={6} className='vacancy_col'>
                                                <Input onChange={(e) => setStatus(e.currentTarget.value)} placeholder={t("Vacansy.6")} />
                                            </Col>
                                            <Col lg={6} className='vacancy_col'>
                                                <Input onChange={(e) => setPhone(e.currentTarget.value)} placeholder={t("Vacansy.7")} />
                                            </Col>
                                            <Col lg={12} className='vacancy_col'>
                                                <Input onChange={(e) => setEducation(e.currentTarget.value)} placeholder={t("Vacansy.8")} />
                                            </Col>
                                        </Row>
                                        <p className='vacansy_form_p'>{t("Vacansy.9")}</p>
                                        <Row className='vacancy_row'>
                                            <Col lg={6} className='vacancy_col'>
                                                <Input onChange={(e) => setWorkPlace1(e.currentTarget.value)} placeholder={t("Vacansy.10")} />
                                            </Col>
                                            <Col lg={6} className='vacancy_col'>
                                                <Input onChange={(e) => setWorkPlace2(e.currentTarget.value)} placeholder={t("Vacansy.11")} />
                                            </Col>
                                            <Col lg={6} className='vacancy_col'>
                                                <Input onChange={(e) => setWorkPlace3(e.currentTarget.value)} placeholder={t("Vacansy.12")} />
                                            </Col>
                                            <Col lg={6} className='vacancy_col'>
                                                <Input onChange={(e) => setLanguage(e.currentTarget.value)} placeholder={t("Vacansy.13")} />
                                            </Col>
                                            <Col lg={12} className='vacancy_col'>
                                                <TextArea onChange={(e) => setComment(e.currentTarget.value)} style={{ borderRadius: "10px", height: "38px", minHeight: "38px" }} placeholder={t("Vacansy.14")} autoSize />
                                            </Col>
                                            <Col lg={12} className='vacancy_col'>
                                                <button type='submit' className='vacansy_modal_btns'>
                                                    {t("Vacansy.15")}
                                                </button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default VacancyCard
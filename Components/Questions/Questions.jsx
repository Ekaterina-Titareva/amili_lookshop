import React from 'react';
import size from '../../assets/images/size.jpg'
import styles from '../Questions/questions.module.scss'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(size, size34, size36, size38, size40, size42, size44, size46, size48, size50, size52) {
    return {size, size34, size36, size38, size40, size42, size44, size46, size48, size50, size52};
}
const rows = [
    createData('Обхват груди, см', 80, 84, 88, 92, 96, 100, 104, 110, 116, 122),
    createData('Обхват талии, см', 62,	66,	70,	74,	78,	82,	86,	92,	98,	104),
    createData('Обхват бедер, см', 86, 90,	94,	98,	102, 106, 110, 116, 122, 128),
    createData('Длина рукава, см', 59, 59, 60, 60, 61, 61, 61, 61, 62, 92),
    createData('Охват верхней части руки, см', 26, 27, 28, 29, 30, 31, 32, 34, 36, 38),
    createData('Ширина спины, см', 33.5, 34.5, 35.5, 36.5, 37.5, 38.5, 39.5, 41, 42.5, 44),
];

function Questions() {
    return (
        <section>
        <h2>часто задаваемые вопросы</h2>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            > 
                <h3>Как ухаживать за изделиями?</h3>
            </AccordionSummary>
            <AccordionDetails>
            <p>Внимательно читайте состав и требования к уходу на бирках. Изделия ручной работы требуют бережного ухода!</p>
            </AccordionDetails>
        </Accordion>



        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <h3>Как правильно снимать мерки?</h3>
            </AccordionSummary>
            <AccordionDetails>
                <div className={styles.containerWrapper}>
                    <div className={styles.imageWrapper}>
                        <img className={styles.image} src={size} alt="size" />
                    </div>
                    <div className={styles.textWrapper}>
                        <p>Для начала измерьте себя.</p>
                        <p>Делайте это перед зеркалом, важно держать ленту на одном уровне спереди и сзади.</p> 
                        <p>А лучше попросите близких, чтобы они сняли ваши мерки.</p>
                        <p>(ОГ) Обхват груди. Измеряется по самым выступающим точкам груди. Руки опущены.</p>
                        <p>(ОТ) Обхват талия. Измеряется по самому узкому месту тела (талии).</p>
                        <p>(ОБ) Обхват бедра. Измеряются по самым выступающим точкам ягодиц.</p>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            > 
                <h3>Как правильно выбрать свой размер?</h3>
            </AccordionSummary>
            <AccordionDetails>
                <p>Мы знаем, что выбрать размер без примерки бывает сложно. Поэтому сначала определите свой размер, по размерной сетке:</p>
                
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Размер</TableCell>
                        <TableCell align="right">34</TableCell>
                        <TableCell align="right">36</TableCell>
                        <TableCell align="right">38</TableCell>
                        <TableCell align="right">40</TableCell>
                        <TableCell align="right">42</TableCell>
                        <TableCell align="right">44</TableCell>
                        <TableCell align="right">46</TableCell>
                        <TableCell align="right">48</TableCell>
                        <TableCell align="right">50</TableCell>
                        <TableCell align="right">52</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.size}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">{row.size}</TableCell>
                        <TableCell align="right">{row.size34}</TableCell>
                        <TableCell align="right">{row.size36}</TableCell>
                        <TableCell align="right">{row.size38}</TableCell>
                        <TableCell align="right">{row.size40}</TableCell>
                        <TableCell align="right">{row.size42}</TableCell>
                        <TableCell align="right">{row.size44}</TableCell>
                        <TableCell align="right">{row.size46}</TableCell>
                        <TableCell align="right">{row.size48}</TableCell>
                        <TableCell align="right">{row.size50}</TableCell>
                        <TableCell align="right">{row.size52}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <p>Если возникнут сложности в выборе размера свяжитесь с нами удобным для Вас способом: </p>
                <p><a href="https://wa.me/+79510686916" target="_blank">WhatsApp</a></p>
                <p><a href="https://t.me/amili_lookshop" target="_blank">Telegram</a></p>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            > 
                <h3>Как сделать предзаказ?</h3>
            </AccordionSummary>
            <AccordionDetails>
            <p>Предзаказ — это возможность забронировать понравившуюся модель в три простых шага:</p>
            <p>- выберите оттенок и размер модели,</p>
            <p>- свяжитесь с нами удобным для Вас способом,</p>
            <p>- внесите предоплату.</p>
            <p>Мы оформим бронь и, как только заказ будет готов, отправим его по Вашему адресу.</p>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            > 
                <h3>Как получить заказ?</h3>
            </AccordionSummary>
            <AccordionDetails>
            <p>После оплаты предзаказа, мы приступаем к пошиву и когда модель будет готова, отправим вам посылку по указанному адресу. Доставка по всей России. Если сроки пошива изменятся, мы Вам сообщим по Вашему номеру телефону.</p>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            > 
                <h3>Услуги портного</h3>
            </AccordionSummary>
            <AccordionDetails>
            <p>Вы можете воспользоваться услугами профессионального портного.</p>
            <p>Укоротить длину брюк, платья, юбок; приталить, зашить и другие услуги ателье.</p>
            <p>Запись по номеру телефона: <a href="tel:+79510686916">+7 951 068 69 16</a></p>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            > 
                <h3>Остались вопросы?</h3>
            </AccordionSummary>
            <AccordionDetails>
                <p>Если не нашли ответа на ваш вопрос, свяжитесь с нами по контактам ниже:</p>
                <p>По номеру телефона: <a href="tel:+79510686916">+7 951 068 69 16</a></p>
                <p><a href="https://wa.me/+79510686916" target="_blank">WhatsApp</a></p>
                <p><a href="https://t.me/amili_lookshop" target="_blank">Telegram</a></p>
            </AccordionDetails>
        </Accordion>
        </section>
    );
}

export default Questions
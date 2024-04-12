const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'petya_petya_2026@mail.ru',
    pass: '9ppeq8bvt4vjYPz1SV6m',
  },
});

const sendEmail = async (email) => {
  try {
    await transporter.sendMail({
      from: 'petya_petya_2026@mail.ru',
      to: email,
      subject: 'Заказ успешно получен',
      text: 'Мы успешно получили ваш заказ. С вами свяжемся в ближайшее время.'
      // ${order.title}\nОписание: ${order.description}
      ,
    });
    console.log('Письмо отправлено');
  } catch (error) {
    console.log('Ошибка отправки письма', error);
  }
};

module.exports = sendEmail;

<?php

	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$street = $_POST['street'];
	$house = $_POST['house'];
	$block = $_POST['block'];
	$apartment = $_POST['apt'];
	$floor = $_POST['floor'];
	$message = $_POST['comment'];
	$pay = $_POST['payment'];
	$callback = $_POST['callback']; // 1 или null 
	$callback = isset($callback) ? 'НЕТ' : 'ДА'; 

	$mail_message = '
	<html>
		<head>
			<title>Заявка</title>
		</head>
		<body>
			<h2>Заказ</h2>
			<ul>
				<li>Имя: ' . $name . '</li>
				<li>Телефон: ' . $phone . '</li>
				<li>Улица: ' . $street . '</li>
				<li>Дом: ' . $house . '</li>
				<li>Корпус: ' . $block . '</li>
				<li>Квартира: ' . $apartment . '</li>
				<li>Этаж: ' . $floor . '</li>
				<li>Комментарии к заказу: ' . $message . '</li>
				<li>Способ оплаты: ' . $payment . '</li>
				<li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
			</ul>
		</body>
	</html>    
	';

	$headers = "From: Администратор сайта <admin@mrBurger.com>\r\n".
	"MIME-Version: 1.0" . "\r\n" .
	"Content-type: text/html; charset=UTF-8" . "\r\n";

	$mail = mail('eexmellie@gmail.com', 'Заказ', $mail_message, $headers);

	$data = [];

	if ($mail) {
		$data['status'] = "OK";
		$data['mes'] = "Письмо успешно отправлено";
	}else{
		$data['status'] = "NO";
		$data['mes'] = "На сервере произошла ошибка";
	}

	echo json_encode($data);
?>
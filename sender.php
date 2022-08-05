<?php
    $name = $_POST['name'];
	  $phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['message'];

	$to = "volodymyrkulis@gmail.com";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = "In_Interior@i.ua";
	$subject = "Заява з сайту";

	$msg="
    Ім'я: $name
    Телефон: $phone
    Почта: $email
    Повідомлення: $text
    ";
  if (mail($to, $subject, $msg , "From: $from ")) {
    $message = "Дякуємо, ми зв'яжемося з Вами!";
  } else {
    $message = "Вибачте! Помилка відправки.";
  }
  $response = ['message' => $message];
  echo json_encode($response);

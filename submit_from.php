<?php
// 폼 데이터 받기
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';

// 필수 입력값 확인
if(empty($name) || empty($email) || empty($message)) {
    echo "모든 필드를 채워주세요.";
    exit;
}

// 이메일 설정
$to = "a01055756383@gmail.com"; // 이메일 수신자 (여기서 이메일을 설정하세요)
$subject = "새로운 문의가 도착했습니다";
$body = "이름: $name\n이메일: $email\n\n메시지:\n$message";

// 헤더 설정
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// 이메일 보내기
if(mail($to, $subject, $body, $headers)) {
    echo "문의가 성공적으로 제출되었습니다. 곧 답변 드리겠습니다!";
} else {
    echo "문의 제출에 실패했습니다. 다시 시도해주세요.";
}
?>

const authValidation = (id, password, nickname = null) => {
  let notificationText = "";

  if (!id || !password) {
    notificationText = "아이디와 비밀번호를 모두 기입해주세요";
  } else if (id.length < 4 || id.length > 10) {
    notificationText = "아이디를 4~10글자 사이로 입력해주세요";
  } else if (password.length < 4 || password.length > 15) {
    notificationText = "패스워드를 4~15글자 사이로 입력해주세요";
  } else if (
    nickname !== null &&
    (nickname.length < 1 || nickname.length > 10)
  ) {
    notificationText = "닉네임을 1~10글자 사이로 입력해주세요";
  } else {
    return true;
  }

  alert(notificationText);
  return false;
};

export default authValidation;

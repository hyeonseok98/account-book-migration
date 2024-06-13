import { useEffect, useState } from "react";
import styled from "styled-components";
import { changeProfile, getUserInfos } from "../../api/auth.api";
import defaultImg from "../../assets/cat-moon.png";
import userInfoStore from "../../stores/userInfoStore";

function MyPage() {
  const { setUserInfo } = userInfoStore((state) => ({
    setUserInfo: state.setUserInfo,
  }));

  const [nickname, setNickname] = useState("");
  const [newNickname, setNewNickname] = useState("");
  const [profileImg, setProfileImg] = useState(defaultImg);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserInfos();
      setUserInfo(data);
      setNickname(data.nickname);
      setNewNickname(data.nickname);
      setProfileImg(data.avatar || defaultImg);
    };

    fetchData();
  }, [setUserInfo, newNickname]);

  const handleUserInfoChange = async () => {
    const formData = new FormData();
    formData.append("nickname", nickname);
    if (profileImg && profileImg !== defaultImg) {
      formData.append("avatar", profileImg);
    }
    const updatedUser = await changeProfile(formData);

    setUserInfo(updatedUser);
    setNewNickname(updatedUser.nickname || "");
    setNickname(updatedUser.nickname || "");
    setProfileImg(updatedUser.avatar || defaultImg);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(file);
    }
  };

  return (
    <Section>
      <ProfileContainer>
        <h2>마이 페이지</h2>
        <ProfileImgWrapper>
          <ProfileImg
            src={
              profileImg instanceof File
                ? URL.createObjectURL(profileImg)
                : profileImg
            }
            alt="프로필 사진"
          />
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </ProfileImgWrapper>
        <NicknameWrapper>
          <label htmlFor="nickname">
            현재 닉네임: <span>{newNickname}</span>
          </label>
          <input
            type="text"
            id="nickname"
            placeholder="변경할 닉네임을 작성해주세요"
            minLength="1"
            maxLength="10"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </NicknameWrapper>
        <SaveButton type="button" onClick={handleUserInfoChange}>
          저장
        </SaveButton>
      </ProfileContainer>
    </Section>
  );
}

export default MyPage;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 320px;
  height: 360px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const ProfileImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0 20px;

  input[type="file"] {
    margin-top: 10px;
  }
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #ececec;
  border-radius: 50%;
`;

const NicknameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-bottom: 10px;
    font-size: 1.4rem;
    font-weight: 600;
  }

  input {
    width: 250px;
    padding: 5px;
    font-size: 1.2rem;
    text-align: left;
  }
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #008bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

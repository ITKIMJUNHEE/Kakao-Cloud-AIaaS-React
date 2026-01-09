import React, { useState } from "react";
function SignUp() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");
    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="남자">남자</option>
                <option value="여자">여자</option>
            </select>
            <button type="submit">제출</button>
        </form>
    );
}
export default SignUp;
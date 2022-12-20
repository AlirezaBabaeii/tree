import {useState, useEffect , useCallback} from 'react';

const Index = () => {
    const [userText, setUserText] = useState("");
    const handleUserKeyPress = useCallback(event => {
        const { key, keyCode } = event;
       

        console.log(keyCode);

    }, []);
    
    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]);
    
      return (
          <div>
              <h1>Feel free to type!</h1>
              <blockquote>{userText}</blockquote>
          </div>
      );
}

export default Index;

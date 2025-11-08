import Student from './Student';
function App() {
  return(
    <>
    {/* <Header /> */}
    {/* <Card/> */}
    {/* <Food /> */}
    {/* <Footer /> */}
    <Student name="SpongeBob" age={30} isStudent={true}/>
    <Student name="Patrick" age = {24} isStudent={false}/>
    <Student />
    </>
  );
}

export default App

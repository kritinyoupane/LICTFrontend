import React,{useState, useEffect} from "react";
import Layout from "../../Components/layout/Layout";
import axiosInstance from "../../helper/Axios";

const Viewer = () => {
  const [array, setArray] = useState([]);

  useEffect(()=> {
    (async () => {
        const response = await axiosInstance.get(`api/examQuestionsByUser`);
        console.log(response)
        if(response){
            console.log(response.data.results)
            setArray(response.data.results.slice(0, 100))
        }
    })()
  }, [])
    return (
        <>
            <Layout>
                <div  id="styleBar" style={{height: '80%', width: '70%', position:'absolute', right:'10%'}}>
                    <div style={{ padding:'5px', paddingLeft:'30px', borderRadius:'7px', color:'white', weight:'600'}}className="csvTitle">Uploaded Questions</div>
                    {array.map((x, i) => (
                        <>
                            <li style={{padding:'10px'}} key={x.id}>{x.question}</li>
                        </>
                    ))}
                </div>
            </Layout>
        </>
    );
};

export default Viewer;

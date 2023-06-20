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
            console.log(response.data.results.slice(0, 20))
            setArray(response.data.results.slice(0, 20))
        }
    })()
  })
    return (
        <>
            <Layout>
                <div  id="styleBar" style={{height: '80%', overflow: 'scroll'}}>
                    <div className="csvTitle">Uploaded Questions</div>
                    {array.map((x, i) => (
                        <>
                            <li key={x.id}>{x.question}</li>
                            <hr />
                        </>
                    ))}
                </div>
            </Layout>
        </>
    );
};

export default Viewer;

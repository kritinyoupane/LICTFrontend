import {useState, useEffect} from 'react'

const AutoReloadTimer = ({startTime, refreshInterval=1000})=> {
    const [timeInterval, setTimeInterval] = useState("");
    const getIntervalString = (utc) => {
      let s = Math.abs(new Date() - Date.parse(utc));
      var ms = s % 1000;
      s = (s - ms) / 1000;
      var secs = s % 60;
      s = (s - secs) / 60;
      var mins = s % 60;
      var hrs = (s - mins) / 60;
  
      return hrs + ":" + mins + ":" + secs;
    };
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeInterval(getIntervalString(startTime));
      }, refreshInterval);
      return () => clearInterval(interval);
    }, []);

    return<>{timeInterval}</>
  }

  export default AutoReloadTimer
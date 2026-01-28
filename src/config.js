// export const API_BASE_URL = `http://192.168.0.158:8080`; // 서버 주소
/*
export const API_BASE_URL = `http://localhost:8080`; // 로컬 주소
export const MQTT_BROKER_URL = `ws://localhost:9001`;
export const YOLO_API_URL = `http://localhost:5000`;   // YOLO 서버 기본 주소// MQTT 브로커

export default API_BASE_URL;
*/




// 서버의 실제 외부 IP 주소(61.33.128.193)를 사용하여 모든 서비스 주소를 변경합니다.

// Spring Backend API: 64242 포트 사용
export const API_BASE_URL = `http://localhost:4242`;

// MQTT Broker: 9001 포트 사용 (포트 포워딩 필수!)
export const MQTT_BROKER_URL = `ws://61.33.128.193:9001`;

// YOLO 서버 기본 주소: 5000 포트 사용 (포트 포워딩 필수!)
export const YOLO_API_URL = `http://61.33.128.193:5000`;

export default API_BASE_URL;


/*


// http://61.33.128.193:64242 에서 도메인으로 변경
export const API_BASE_URL = `http://boaa-posture.store:64242`;

// MQTT Broker
export const MQTT_BROKER_URL = `ws://boaa-posture.store:9001`;

// YOLO 서버 기본 주소
export const YOLO_API_URL = `http://boaa-posture.store:5000`;

export default API_BASE_URL;


*/
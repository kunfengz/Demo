import instance from '../network/instance';

export const getTodoList = () => instance.get("/getTogoList");
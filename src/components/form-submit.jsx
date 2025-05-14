import {  Form, Input, Select } from "antd"
import axios from "axios";
// import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

function FormSubmit() {
    const [form] = Form.useForm();
    const navigate = useNavigate()

    function handleClick() {
        navigate('/')
    }
    const onGenderChange = value => {
        switch (value) {
        case 'Работотехника':
            form.setFieldsValue({ note: 'Работотехника' });
            break;
        case 'Живопись для взрослых':
            form.setFieldsValue({ note: 'Живопись для взрослых' });
            break;
        case 'Шахмат':
            form.setFieldsValue({ note: 'Шахмат' });
            break;
        case 'Английский':
            form.setFieldsValue({ note: 'Английский' });
            break;
        default:
        }
    };

    const handleSubmit = async (values) => {
        await axios.post(
        "https://script.google.com/macros/s/AKfycbwGmUpYl_anIWoL5B1vBVvrk_BpZKzl7S1vGWG6CnwIsWys6dnFZ_xo1dAgijTYdsVg/exec",
            values,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
        ).then((res) => {
            console.log("Server javobi:", res.data);
        }).catch((err) => {
            console.error("Xatolik:", err.response?.data || err.message);
        });
    };

  return (
    <div className="relative bg-[#000000] h-[120vh]">
        <img className="absolute top-0 right-0" src="/images/top-right.png" alt="top" />
        <img className="absolute bottom-0 left-0" src="/images/bottom-left.png" alt="bottom" />
        <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[64px] font-[700] leading-[100%] py-[80px] text-center text-[#fff]">Приглашаем на первый урок!</h2>
            <div className="flex z-10 relative">
                <div className="rounded-[20px] p-[25px] bg-[#fff]">
                    <Form
                        name="layout-multiple-horizontal"
                        layout="horizontal"
                        requiredMark={false}
                        onFinish={(values) => handleSubmit(values)}
                        initialValues={{
                            firstname: "",
                            lastname: "",
                            phone: "",
                            age: null,
                            kurs: "",
                        }}
                    >
                        <Form.Item
                            label="Name"
                            name="firstname"
                            rules={[{ required: true }]}
                            layout="vertical"
                            className='h-[60px] w-[270px] sm:w-[374px] username_label'
                        >
                            <Input placeholder='Enter your First name'/>
                        </Form.Item>
                        <Form.Item
                            label="Second Name"
                            name="lastname"
                            rules={[{ required: true }]}
                            layout="vertical"
                            className='h-[60px] w-[270px] sm:w-[374px] username_label'
                        >
                            <Input placeholder='Enter your Second name'/>
                        </Form.Item>

                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[{ required: true }]}
                            layout="vertical"
                            className='h-[60px] w-[270px] sm:w-[374px] password_label'
                        >
                            <Input placeholder='+998 94 555 55 55'/>
                        </Form.Item>
                        <div className="flex gap-[10px] items-center">
                            <Form.Item
                                label="Age"
                                name="age"
                                rules={[{ required: true }]}
                                layout="vertical"
                                className='h-[60px] w-50% password_label'
                            >
                                <Input type="number" placeholder='age'/>
                            </Form.Item>
                            <Form.Item name="kurs" label="kurs"
                                layout="vertical" rules={[{ required: true }]}  className='h-[60px] w-[135px] sm:w-[50%] password_label'>
                                <Select
                                    placeholder="Выберете курс"
                                    onChange={onGenderChange}
                                    allowClear
                                    >
                                    <Option value="Работотехника">Работотехника</Option>
                                    <Option value="Живопись для взрослых">Живопись для взрослых</Option>
                                    <Option value="Шахмат">Шахмат</Option>
                                    <Option value="Английский">Английский</Option>
                                </Select>
                            </Form.Item>
                        </div>
                        
                        <div className="flex items-center gap-[10px]  mb-[80px] absolute bottom-[-230px] right-[20px]">
                            <button onClick={handleClick} className="text-[#000] py-[16px] w-[310px] text-center font-[700] text-[24px] leading-[100%] rounded-[7px] bg-[#fff] cursor-pointer">
                                Назад
                            </button>
                            <button className="header_button  text-[#000] py-[16px] w-[310px] text-center font-[700] text-[24px] leading-[100%] rounded-[7px] bg-[#FFE000] cursor-pointer">
                                Записаться
                            </button>
                        </div>
                    </Form>
                </div>
                <div className="absolute right-[100px]">
                    <img src="/images/orange_robot_6.png" alt="orange" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormSubmit
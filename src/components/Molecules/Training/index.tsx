import React from 'react';
import {
  Form,
  Input,
  Button,
  DatePicker,
  TimePicker,
  Select,
  Col,
  Row,
  message,
  Skeleton,
} from 'antd';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import { useHistory } from 'react-router-dom';

import './styles.css';

const { Option } = Select;

export const Training = (props: any) => {
  const history = useHistory();
  const { times, places, speciality } = props;

  const onFinish = async (values: any) => {
    await message.success(
      `Вы успешно записались на тренировку в ${values.type}`,
      1.5
    );
    await message.info('Перенаправляем на главную...', 1);
    history.push('/');
  };
  return places ? (
    <div className="training_form">
      <Row justify="center">
        <Col sm={3}>
          <Form layout="vertical" name="basic" onFinish={onFinish}>
            <Form.Item
              label="Место тренировки"
              name="type"
              rules={[{ required: true, message: 'Укажите место тренировки' }]}
            >
              <Select style={{ width: '100%' }}>
                {places.places.map((place: any) => (
                  <Option value={place}>{place}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Выберите дату"
              name="date"
              rules={[{ required: true, message: 'Укажите дату' }]}
            >
              <DatePicker locale={locale} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              label="Доступное время"
              name="time"
              rules={[{ required: true, message: 'Укажите время' }]}
            >
              <Select style={{ width: '100%' }}>
                //@ts-ignore
                {times.map((time, i) => (
                  <Option value={time[i]}>{time}</Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item>
              <Row justify="space-between">
                <Button type="primary" htmlType="submit">
                  Записаться
                </Button>
                <Button type="primary" onClick={history.goBack}>
                  Назад
                </Button>
              </Row>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  ) : (
    <Skeleton active></Skeleton>
  );
};

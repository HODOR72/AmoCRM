import FormButtons from './formButtons/FormButtons'
import FormTel from './formTel/FormTel'

const FormWrapper = () => {
	return (
		<form>
			<FormButtons
				title="1. Пользуетесь amoCRM?"
				values={[
					'Нет, планирую',
					'Да, меньше года',
					'Да, 1-3 года',
					'Да, более 3-х лет',
				]}
				name="usage"
			/>
			<FormButtons
				title="2. Сколько менеджеров у вас в штате?"
				values={['1-3', '4-10', '11-20', 'Более 20']}
				name="amount"
			/>
			<FormButtons
				title="3. Пользуетесь виджетами?"
				values={['Нет', 'Да, 1-3 виджета', 'Да, 4-8 виджетов', 'Да, более 8 виджетов']}
				name="widgets"
			/>
			<FormButtons
				isBig
				title="4. Выберите бонус, который хотите получить"
				values={['30 виджетов', '20% на доработку AmoCRM']}
				name="bonus"
			/>
			<FormTel text="Получить расчёт" />
		</form>
	)
}
export default FormWrapper

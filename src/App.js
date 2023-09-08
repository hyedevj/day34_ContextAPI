import styled from "@emotion/styled";
import Header from "./components/Header";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import TaskProvieder from "./contexts/TaskProvider";

const Container = styled.div`
	width: 400px;
	margin: 0 auto;
`

function App() {
	return (
		<TaskProvieder>
			<Container>
				<Header>ToDo</Header>
				<NewTaskForm />
				<TaskList css={{ marginTop: 16 }} />
			</Container>
		</TaskProvieder>
	)
}

export default App;
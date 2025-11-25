interface ErrorMessageType {
    errorMessage: string;
}

function ErrorMessage ({errorMessage}: ErrorMessageType) {

    return (
        <div>
            <h2 className='text-center text-2xl font-semibold'>{errorMessage}</h2>
            <img className='mx-auto w-48 mt-5' src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWMzdnJwdjd4a3l3ZGEwMnZ0NGgzdnV6ZGFuNHU2NDN3aWh0cGlqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/N8wR1WZobKXaE/giphy.gif" alt="Funny Robots failing gif" />
        </div>
    )
}

export default ErrorMessage
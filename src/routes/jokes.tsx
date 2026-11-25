import { JokeForm } from '#/components/JokeForm'
import { JokesList } from '#/components/JokesList'
import { getJokes } from '#/serverActions/jokesActions'
import { createFileRoute } from '@tanstack/react-router'

const App = () => {
  const jokes = Route.useLoaderData()

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 space-y-6">
      <h1 className="text-4xl font-bold text-center mb-10">DevJokes</h1>
      <JokeForm/>
      <JokesList jokes={jokes} />
    </div>
  )
}

export const Route = createFileRoute('/jokes')({
  loader: async () => {
    // Load jokes data when the route is accessed
    return getJokes()
  },
    head: () => ({
        meta: [
            {
                title: 'Jokes | TanStack Start Starter',
            },
            {
                name: 'description',
                content: 'Jokes description',
            }
        ],
    }),
  component: App,
})
import { render, screen } from "@testing-library/react"
import Post from ".."

describe('Teste para o componente Post', () => {
    test('Deve renderizar corretamente', () => {
        const { debug } = render(<Post imageUrl="https://via.placeholder.com/250x250">Teste</Post>)
        // eslint-disable-next-line testing-library/no-debugging-utils
        expect(screen.getByText('Teste')).toBeInTheDocument();

        const postImage = screen.getByAltText("Post");
        expect(postImage).toBeInTheDocument();
        expect(postImage).toHaveAttribute(
            "src",
            "https://via.placeholder.com/250x250"
        );
        // eslint-disable-next-line testing-library/no-debugging-utils
        debug()
        expect(screen.getByTestId("post-comments")).toBeInTheDocument();
    });
});
import { Container, Row } from "react-bootstrap"
import { LayoutParameters } from "Resources/Models/Website/LayoutParameters"
import { MainNavigationComponent } from "Website/Components/NavigationComponents/MainNavigationComponent"

export const MainLayout = ({children}:LayoutParameters) => {
    return (
        <Container fluid>
            <Row className="mb-4">
                <MainNavigationComponent />
            </Row>
            <Row className="pr-3 pl-3">
                {children}
            </Row>
        </Container>
    )
}

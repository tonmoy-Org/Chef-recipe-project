import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        padding: 10,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        textAlign: 'justify',
        marginBottom: 10,
    },
});
export const PDFGenerator = () => (
    <Document>
        <Page style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Answer the following questions From the Blog Page</Text>

                <Text style={styles.subtitle}>
                    1. Tell us the differences between uncontrolled and controlled components.
                </Text>
                <Text style={styles.text}>
                    In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                </Text>
                <Text style={styles.subtitle}>
                    2. How to validate React props using PropTypes
                </Text>
                <Text style={styles.text}>
                    Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components.
                </Text>
                <Text style={styles.subtitle}>
                    3. Tell us the difference between nodejs and express js.
                </Text>
                <Text style={styles.text}>
                    Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".
                </Text>
                <Text style={styles.subtitle}>
                    4. What is a custom hook, and why will you create a custom hook?
                </Text>
                <Text style={styles.text}>
                    Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                </Text>
            </View>
        </Page>
    </Document>
);

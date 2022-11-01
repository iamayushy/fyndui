import FyPaper from "../components/Paper/FyPaper.vue";

export default {
    title: "Components/FyPaper",
    components: FyPaper,

    argTypes: {

    }
}

const Template = (arg, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {FyPaper},
    template: `<fy-paper v-bind="$props">
    <h1>I am the user text</h1>
    <p>Lorem ispun some of the worng test is opresnt ger
    i habe nod eduedbewofew dewbdeuwobdfew kejdbewkbdewdew
    bdkewbdkbewkfjnrwf wkfbewkbfjkewbfew
    fewkfbewkjfbjewlnfjbewjklfhewlfelwkfewrif ewewhfbewifgouewfkjewbfew
    fewkfewfhlerw fewkfgewuflewrbfouew fkjfbuewgfewbfjewbf
    ewfejwhvfkhewbfkjewf hjedbekhbwdkfbwfjbrwkjgbrekjbfkrjwbgjkwbgjkwrbgjkbwrkjgbjkrwbgjkerbjgkbferkg fregbrjwbfljewnfewr frefbuergotr gregfbeorbglregote</p>
    </fy-paper>`
})

export const Primary = Template.bind({})

Primary.args = {
    
}
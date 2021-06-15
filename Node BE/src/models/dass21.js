const { mongoose } = require("mongoose");

//possible values for dass21 questions
const POSSIBLE_VALUES =[
    {
        answerId:'N',
        value :0,
        labels: {
            en:'Never',
            fr:'Jamais',
            ar:'أبدا'
        }
    },
    {
        answerId:'S',
        value :1,
        labels: {
            en:'Some times',
            fr:'Quelquefois',
            ar:'بعض الأحيان'
        }
    },
    {
        answerId:'O',
        value :2,
        labels: {
            en:'Often',
            fr:'Souvent',
            ar:'غالبا'
        }
    },
    {
        answerId:'AA',
        value :3,
        labels: {
            en:'Almost always',
            fr:'Presque toujours',
            ar:'تقريبا دائما'
        }
    }
]
/*
const questionSchema = new mongoose.Schema({
    defId:Number,
        labels: {
            en: String,
            fr: String,
            ar: String
        },
        impact:{
            stress:Boolean,
            anxiety:Boolean,
            depression:Boolean
        },
        possibleValues:POSSIBLE_VALUES
});
*/

//DASS 21 questions in eng/fr/ar
const DASS21_DEF=[
    {   defId:1,
        labels: {
            en:'I found it hard to wind down',
            fr:'J\'ai eu du mal à me détendre',
            ar:'وجدت صعوبة يف االسرتخاء والراحة'
        },
        impact:{
            stress:true,
            anxiety:false,
            depression:false,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:2,
        labels: {
            en:'I was aware of dryness of my mouth',
            fr:'J’ai trouvé difficile de décompresser',
            ar:'ي يف جبفاف شعرت'
        },
        impact:{
            stress:false,
            anxiety:true,
            depression:false,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:3,
        labels: {
            en:'I couldn’t seem to experience any positive feeling at all',
            fr:'J’ai eu l’impression de ne pas pouvoir ressentir d’émotion positive',
            ar:'مل يبدو يل أن بإمكاين اإلحساس مبشاعر إجيابية على اإلطالق'
        },
        impact:{
            stress:false,
            anxiety:false,
            depression:true,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:4,
        labels: {
            en:'I experienced breathing difficulty (eg, excessively rapid breathing breathlessness in the absence of physical exertion)',
            fr:'J’ai eu de la difficulté à respirer (par exemple, respirations excessivement rapides, essoufflement sans effort physique)',
            ar:'مل يبدو يل أن بإمكاين اإلحساس مبشاعر إجيابية على اإلطالق'
        },
        impact:{
            stress:false,
            anxiety:true,
            depression:false,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:5,
        labels: {
            en:'I found it difficult to work up the initiative to do things',
            fr:'J’ai eu de la difficulté à initier de nouvelles activités',
            ar:'وجدت صعوبة يف أخذ املبادرة بعمل األشياء'
        },
        impact:{
            stress:false,
            anxiety:false,
            depression:true,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:6,
        labels: {
            en:'I tended to over-react to situations',
            fr:'J’ai eu tendance à réagir de façon exagérée',
            ar:'كنت أميل إىل ردة فعل مفرطة للظروف واألحداث'
        },
        impact:{
            stress:true,
            anxiety:false,
            depression:false,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:7,
        labels: {
            en:'I experienced trembling (eg, in the hands)',
            fr:'J’ai eu des tremblements (par exemple, des mains)',
            ar:')ُمثال باليدين )برجفة شعرت'
        },
        impact:{
            stress:false,
            anxiety:true,
            depression:false,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:8,
        labels: {
            en:'I felt that I was using a lot of nervous energy',
            fr:'J’ai eu l’impression de dépenser beaucoup d’énergie nerveuse',
            ar:'حتمل التوتر العصيب( شعرت بأنين أستهلك الكثري يف الطاقة العصبية )شعرت بأنين أستهلك الكثري من قدريت على '
        },
        impact:{
            stress:true,
            anxiety:false,
            depression:false,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:9,
        labels: {
            en:'I was worried about situationsin which I might panic and make a fool of myself',
            fr:'Je me suis inquiété(e) en pensant à des situations où je pourrais paniquer et faire de moi un(e) idiot(e)',
            ar:'كنت خائفاً من مواقف قد أفقد فيها السيطرة على أعصايب واسبب إحراجا لنفسي'
        },
        impact:{
            stress:false,
            anxiety:true,
            depression:false,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:10,
        labels: {
            en:'I felt that I had nothing to look forward to',
            fr:'J’ai eu le sentiment de ne rien envisager avec plaisir',
            ar:'شعرت بأن ليس لدي أي شيء أتطلع إليه'
        },
        impact:{
            stress:false,
            anxiety:false,
            depression:true,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:11,
        labels: {
            en:'I found myself getting agitated',
            fr:'Je me suis aperçu(e) que je devenais agité(e)',
            ar:'ج مضطرب بأنين ش'
        },
        impact:{
            stress:true,
            anxiety:false,
            depression:false,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:12,
        labels: {
            en:'I found it difficult to relax',
            fr:'J’ai eu de la difficulté à me détendre',
            ar:'ء يف صعوبة أجد'
        },
        impact:{
            stress:true,
            anxiety:false,
            depression:false,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:13,
        labels: {
            en:'I felt down-hearted and blue',
            fr:'Je me suis senti(e) abattu(e) et triste',
            ar:'م باحلزن شعرت'
        },
        impact:{
            stress:false,
            anxiety:false,
            depression:true,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:14,
        labels: {
            en:'I was intolerant of anything that kept me from getting on with what I was doing',
            fr:'J’ai été intolérant(e) à tout ce qui m’empêchait de faire ce que j’avais à faire',
            ar:'كنت ال أستطع حتمل أي شيء حيول بيين وبني ما أرغب يف القيام به'
        },
        impact:{
            stress:true,
            anxiety:false,
            depression:false,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:15,
        labels: {
            en:'I felt I was close to panic',
            fr:'J’ai eu le sentiment d’être presque pris(e) de panique',
            ar:'شعرت بأنين على وشك الوقوع يف حالة من الرعب املفاجئ بدون سبب'
        },
        impact:{
            stress:false,
            anxiety:true,
            depression:false,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:16,
        labels: {
            en:'I was unable to become enthusiastic about anything',
            fr:'J’ai été incapable de me sentir enthousiaste au sujet de quoi que ce soit',
            ar:'فقدت الشعور باحلماس ألي شيء'
        },
        impact:{
            stress:false,
            anxiety:false,
            depression:true,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:17,
        labels: {
            en:'I felt I wasn’t worth much as a person',
            fr:'J’ai eu le sentiment de ne pas valoir grand chose comme personne',
            ar:'شعرت بأن قيميت قليلة كشخص'
        },
        impact:{
            stress:false,
            anxiety:false,
            depression:true,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:18,
        labels: {
            en:'I felt that I was rather touchy',
            fr:'J’ai eu l’impression d’être assez susceptible',
            ar:'شعرت بأنين أميل إىل الغيظ بسرعة'
        },
        impact:{
            stress:true,
            anxiety:false,
            depression:false,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:19,
        labels: {
            en:'I was aware of the action of my heart in the absence of physicalexertion (eg, sense of heart rate increase, heart missing a beat) ',
            fr:'J’ai été conscient(e) des palpitations de mon coeur en l’absence d’effort physique (sensation d’augmentation de mon rythme cardiaque ou l’impression que mon cœur venait de sauter)',
            ar:'شعرت بضربات قليب بدون جمهود جسدي )زيادة يف معدل الدقات، أو غياب دقة قلب، مثالً('
        },
        impact:{
            stress:false,
            anxiety:true,
            depression:false,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:20,
        labels: {
            en:'I felt scared without any good reason',
            fr:'J’ai eu l’impression de dépenser beaucoup d’énergie nerveuse',
            ar:'شعرت باخلوف بدون أي سبب وجيه'
        },
        impact:{
            stress:false,
            anxiety:true,
            depression:false,
        },
        possibleValues:POSSIBLE_VALUES
    },
    {   defId:21,
        labels: {
            en:'I felt that life was meaningless',
            fr:'J’ai eu l’impression de dépenser beaucoup d’énergie nerveuse',
            ar:'شعرت بأن احلياة ليس هلا معى'
        },
        impact:{
            stress:false,
            anxiety:false,
            depression:true,
        },
        possibleValues:POSSIBLE_VALUES
    }
]

module.exports = DASS21_DEF;
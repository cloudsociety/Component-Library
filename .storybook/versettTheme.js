import { create } from "@storybook/theming/create"

export default create({
  base: "light",

  // Storybook-specific color palette
  colorPrimary: "#FF4785", // coral
  colorSecondary: "#1EA7FD", // ocean

  appContentBg: "whitesmoke",

  brandTitle: `V// Showroom`, // Theme brand title
  brandUrl: "https://versett.com/", // Theme brand URL
  brandImage:
    "data:image/svg+xml,%3Csvg%20width%3D%2299%22%20height%3D%2234%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22nonzero%22%3E%3Cpath%20fill%3D%22%23eeeeee%22%20d%3D%22M96.95%2018.551c-1.528%200-2.604-.382-2.604-3.439V7.851h4.098V5.315h-4.098V0h-3.023v5.315h-2.917v2.536h2.917v7.921c0%205.177%203.023%205.524%204.967%205.524%201.008%200%202.12-.104%202.71-.208v-2.675c-.452.069-1.424.138-2.05.138zm-13.72-3.439V7.851h4.099V5.315h-4.1V0h-3.021v5.315h-2.919v2.536h2.919v7.921c0%205.177%203.021%205.524%204.967%205.524%201.007%200%202.12-.104%202.71-.208v-2.675c-.453.069-1.425.138-2.05.138-1.528%200-2.606-.382-2.606-3.439zm-10.526-3.404c0-2.744-1.91-4.482-4.447-4.482-2.708%200-4.62%201.634-4.688%204.482h9.135zm2.918.313c0%20.45%200%201.111-.139%201.98H63.534c.138%202.675%201.423%204.933%204.898%204.933%202.361%200%203.508-1.146%203.994-2.501h3.057c-.521%202.674-3.091%205.037-7.051%205.037-5.315%200-7.886-3.718-7.886-8.268%200-4.76%202.814-8.303%207.78-8.303%204.1%200%207.296%203.091%207.296%207.12v.002zm-22.198.278c-2.917-.94-4.55-1.181-4.55-2.78%200-1.425%201.251-2.188%202.918-2.188%202.084%200%203.197%201.041%203.197%202.883h2.918c0-3.161-2.641-5.315-6.08-5.315-3.265%200-5.87%201.598-5.87%204.55%200%202.85%201.875%203.578%204.272%204.343%203.16%201.077%205.037%201.251%205.037%203.022%200%201.563-1.25%202.258-3.161%202.258-2.118%200-3.717-.903-3.717-3.3h-2.952c0%203.822%203.056%205.698%206.53%205.698%203.543%200%206.183-1.563%206.183-4.725%200-2.988-2.326-3.683-4.724-4.446zM37.795%208.408V5.315h-3.022v15.773h3.022v-6.914c0-3.786%201.737-6.253%205.245-6.253.556%200%20.868.035%201.493.173V5.315c-.416-.173-.903-.243-1.493-.243-2.223%200-4.411%201.355-5.245%203.336zm-8.93%203.3c0-2.744-1.91-4.482-4.447-4.482-2.708%200-4.62%201.634-4.688%204.482h9.135zm2.918.313c0%20.45%200%201.111-.139%201.98H19.696c.139%202.675%201.424%204.933%204.898%204.933%202.361%200%203.508-1.146%203.994-2.501h3.057c-.52%202.674-3.091%205.037-7.051%205.037-5.315%200-7.884-3.718-7.884-8.268%200-4.76%202.812-8.303%207.78-8.303%204.098%200%207.294%203.091%207.294%207.12l-.001.002zM13.199%205.315h3.265L9.24%2021.088H7.155L0%205.315h3.266L8.198%2016.78%2013.2%205.315z%22%2F%3E%3Cpath%20d%3D%22M5.807%2026.466a1.902%201.902%200%200%200-.649-.567c-.264-.143-.583-.214-.957-.214-.19%200-.385.03-.583.088a1.691%201.691%200%200%200-.539.27%201.385%201.385%200%200%200-.39.456c-.1.183-.149.4-.149.649%200%20.25.048.455.143.616.095.161.222.299.38.413.157.113.337.207.538.28.202.073.413.147.633.22.271.088.544.183.82.286.275.103.522.236.742.401.22.166.4.374.539.627.14.254.209.574.209.963s-.075.724-.225%201.006a2.13%202.13%200%200%201-.583.699c-.239.183-.51.319-.814.407-.305.088-.611.132-.919.132-.235%200-.47-.024-.704-.072a3.184%203.184%200%200%201-.671-.214%202.744%202.744%200%200%201-.594-.363%202.639%202.639%200%200%201-.484-.506l.682-.506c.169.279.405.511.71.699.304.187.661.28%201.072.28.198%200%20.4-.031.605-.093.205-.063.39-.158.556-.287.165-.128.3-.285.407-.473.106-.187.159-.405.159-.654%200-.271-.053-.497-.16-.677a1.42%201.42%200%200%200-.423-.45%202.592%202.592%200%200%200-.605-.303c-.227-.08-.466-.161-.715-.242a9.375%209.375%200%200%201-.759-.275%202.567%202.567%200%200%201-.671-.402%201.875%201.875%200%200%201-.478-.61c-.122-.242-.182-.539-.182-.891%200-.374.075-.697.226-.968a2.04%202.04%200%200%201%20.588-.671c.242-.176.51-.304.803-.385.293-.08.583-.121.869-.121.528%200%20.979.093%201.353.28.374.188.656.41.847.666l-.627.506zm6.631-1.254h.792v3.377h4.246v-3.377h.792V33h-.792v-3.685H13.23V33h-.792v-7.788zm19.798%203.894c0%20.594-.103%201.14-.308%201.639-.205.499-.49.93-.852%201.293a3.925%203.925%200%200%201-1.288.852%204.164%204.164%200%200%201-1.611.308c-.58%200-1.116-.103-1.611-.308a3.925%203.925%200%200%201-1.287-.852%203.911%203.911%200%200%201-.853-1.293%204.264%204.264%200%200%201-.308-1.639c0-.594.103-1.14.308-1.639.205-.499.49-.93.853-1.293a3.925%203.925%200%200%201%201.287-.852%204.164%204.164%200%200%201%201.611-.308c.58%200%201.116.103%201.611.308.496.205.924.49%201.288.852.363.364.647.794.852%201.293.205.499.308%201.045.308%201.639zm-.836%200a3.83%203.83%200%200%200-.22-1.298%203.244%203.244%200%200%200-.638-1.084%203.055%203.055%200%200%200-1.018-.742%203.195%203.195%200%200%200-1.347-.275c-.499%200-.948.092-1.348.275-.4.183-.738.43-1.017.742a3.244%203.244%200%200%200-.638%201.084%203.83%203.83%200%200%200-.22%201.298c0%20.455.073.887.22%201.298.147.41.36.77.638%201.078.279.308.618.554%201.017.737.4.183.85.275%201.348.275.499%200%20.948-.092%201.348-.275.4-.183.738-.429%201.017-.737.279-.308.491-.667.638-1.078.147-.41.22-.843.22-1.298zm8.567%202.805h.022l1.947-6.699h.946l1.947%206.699h.022l1.903-6.699h.836L45.291%2033h-.924l-1.958-6.688h-.022L40.429%2033h-.924l-2.299-7.788h.836l1.925%206.699zM53.77%2033h-.792v-7.788h2.288c.381%200%20.735.037%201.062.11.326.073.608.192.846.358.239.165.424.379.556.643.132.264.198.587.198.968%200%20.286-.051.546-.154.781a1.924%201.924%200%200%201-1.045%201.023%202.73%202.73%200%200%201-.792.198L58.214%2033h-.968l-2.156-3.641h-1.32V33zm0-4.323h1.375c.638%200%201.13-.115%201.474-.346.345-.232.517-.578.517-1.04%200-.257-.048-.473-.143-.649a1.17%201.17%200%200%200-.396-.429%201.804%201.804%200%200%200-.616-.242%203.877%203.877%200%200%200-.803-.077H53.77v2.783zm17.697.429c0%20.594-.103%201.14-.308%201.639-.205.499-.49.93-.853%201.293a3.925%203.925%200%200%201-1.287.852%204.164%204.164%200%200%201-1.611.308c-.58%200-1.116-.103-1.612-.308a3.925%203.925%200%200%201-1.287-.852%203.911%203.911%200%200%201-.852-1.293%204.264%204.264%200%200%201-.308-1.639c0-.594.103-1.14.308-1.639.205-.499.49-.93.853-1.293a3.925%203.925%200%200%201%201.286-.852%204.164%204.164%200%200%201%201.612-.308c.58%200%201.116.103%201.611.308.496.205.924.49%201.287.852.364.364.648.794.853%201.293.205.499.308%201.045.308%201.639zm-.836%200a3.83%203.83%200%200%200-.22-1.298%203.244%203.244%200%200%200-.638-1.084%203.055%203.055%200%200%200-1.017-.742%203.195%203.195%200%200%200-1.348-.275c-.499%200-.948.092-1.347.275-.4.183-.74.43-1.018.742a3.244%203.244%200%200%200-.638%201.084%203.83%203.83%200%200%200-.22%201.298c0%20.455.073.887.22%201.298.147.41.36.77.638%201.078.279.308.618.554%201.017.737.4.183.85.275%201.348.275.499%200%20.948-.092%201.347-.275.4-.183.74-.429%201.018-.737.279-.308.491-.667.638-1.078.147-.41.22-.843.22-1.298zm14.386%200c0%20.594-.103%201.14-.308%201.639-.205.499-.49.93-.853%201.293a3.925%203.925%200%200%201-1.286.852%204.164%204.164%200%200%201-1.612.308c-.58%200-1.116-.103-1.611-.308a3.925%203.925%200%200%201-1.287-.852%203.911%203.911%200%200%201-.853-1.293%204.264%204.264%200%200%201-.308-1.639c0-.594.103-1.14.308-1.639.205-.499.49-.93.853-1.293a3.925%203.925%200%200%201%201.287-.852%204.164%204.164%200%200%201%201.611-.308c.58%200%201.116.103%201.612.308.495.205.923.49%201.287.852.363.364.647.794.852%201.293.205.499.308%201.045.308%201.639zm-.836%200a3.83%203.83%200%200%200-.22-1.298%203.244%203.244%200%200%200-.638-1.084%203.055%203.055%200%200%200-1.017-.742%203.195%203.195%200%200%200-1.348-.275c-.499%200-.948.092-1.347.275-.4.183-.74.43-1.018.742a3.244%203.244%200%200%200-.638%201.084%203.83%203.83%200%200%200-.22%201.298c0%20.455.073.887.22%201.298.147.41.36.77.638%201.078.279.308.618.554%201.017.737.4.183.85.275%201.348.275.499%200%20.948-.092%201.347-.275.4-.183.74-.429%201.018-.737.279-.308.491-.667.638-1.078.147-.41.22-.843.22-1.298zm10.536%202.552h.011l2.607-6.446h1.21V33h-.792v-6.765h-.022L94.915%2033h-.418l-2.816-6.765h-.022V33h-.792v-7.788h1.21l2.64%206.446z%22%20fill%3D%22%239B9B9B%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
})

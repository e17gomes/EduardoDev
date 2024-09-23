interface Exp {
    className?: string,
    role: string,
    company: string,
    describe: string;
    time: string;
    techs: string;
    isActive: boolean;
    onToggle: () => void;
};

export default Exp
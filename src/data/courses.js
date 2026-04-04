import civilHeroImg from '@/assets/civil-hero.webp';
import electricalHeroImg from '@/assets/electrical-hero.webp';
import mechanicalHeroImg from '@/assets/mechanical-hero.webp';
import mechatronicsHeroImg from '@/assets/mechatronics-hero.webp';
import complementaryHeroImg from '@/assets/complementary-hero.webp';
import {
  TrendingUp, Waves, Navigation, Route,
  Zap, Sliders, Activity, Network,
  Flame, Wind, Gauge, Layers,
  Cpu, CircuitBoard, Plug, Thermometer,
  Briefcase,
} from 'lucide-react';

export const disciplines = [
  {
    id: 'civil',
    name: 'Civil Engineering',
    description: 'Structures, transportation, hydraulics, and infrastructure design.',
    status: 'available',
    headerImage: civilHeroImg,
    courses: [
      {
        id: 'engineering-economics',
        title: 'Engineering Economics',
        icon: TrendingUp,
        summary:
          'Many engineers face a critical gap: the financial literacy needed to evaluate projects, manage budgets, and justify decisions to stakeholders. This course bridges that gap by covering the core economic principles that govern engineering decision-making, from analyzing cash flows and comparing investment alternatives to understanding how asset value changes over time. By the end, you will be able to assess project viability, calculate returns, and speak confidently with financial professionals.',
        topics: [
          'Time Value of Money (Present Worth, Future Worth, Annual Amounts)',
          'Interest Rates, Nominal vs. Effective, and Equivalence',
          'Investment Evaluation using IRR and MARR',
          'Incremental Analysis for comparing multiple alternatives',
          'Depreciation methods: Straight-Line, Declining Balance, MACRS',
          'Replacement Analysis based on economic and physical lifespan',
          'Cash Flow Diagrams and financial metrics for decision-making',
        ],
      },
      {
        id: 'hydraulics-engineering',
        title: 'Hydraulics Engineering',
        icon: Waves,
        summary:
          'Water flow dynamics are at the core of infrastructure, water resources, and energy projects. This course goes beyond equations and focuses on applying fluid mechanics to real problems, teaching you to design hydraulic systems, forecast flow rates and energy losses, manage complex pipe distribution networks, and model transient events. The emphasis throughout is on practical problem-solving that has direct impact on water supply, dam safety, and efficient pumping design.',
        topics: [
          'Steady Flow: discharge equations and head loss analysis',
          'Pipes in Series and Parallel configurations',
          'Open Channel Flow using Manning\'s equation',
          'Complex pipe networks and reservoir analysis',
          'Looped systems solved via the Hardy Cross method',
          'Pump mechanics, system curves, and configurations',
          'Transient flow phenomena and critical depth analysis',
        ],
      },
      {
        id: 'transportation-planning-and-engineering',
        title: 'Transportation Planning and Engineering',
        icon: Navigation,
        summary:
          'This course examines how cities design transportation networks to move people and goods efficiently. It covers the planning and engineering principles behind road systems, public transit, and urban mobility, with a strong focus on demand forecasting and traffic analysis methods used in real practice. You will learn to analyze traffic inefficiencies, forecast travel demand, optimize mode selection, and assess the impact of infrastructure and policy changes.',
        topics: [
          'Trip Generation: Trip Rate Analysis, Cross-Classification, Regression',
          'Trip Distribution: Gravity Model and Fratar Model',
          'Traffic Assignment: All-or-Nothing and User Equilibrium (UE)',
          'Queuing Theory applied to congestion analysis',
          'Traffic Shock Waves using Greenshields\' model',
          'Modal Choice: Multinomial Logit Model and behavioral prediction',
        ],
      },
      {
        id: 'highway-design-construction-and-maintenance',
        title: 'Highway Design, Construction, and Maintenance',
        icon: Route,
        summary:
          'Poorly designed roads create safety hazards, inefficient traffic flow, and costly long-term maintenance. This course equips engineers with the tools to design highways that are functional, resilient, and cost-effective, covering everything from geometric layout and pavement selection to earthworks and drainage. You will graduate able to design both flexible and rigid pavements, calculate earthwork volumes, incorporate traffic loads, and apply safety-focused geometric principles.',
        topics: [
          'Geometric Design: horizontal and vertical alignment, curves, grades, sight distances',
          'Equivalent Single Axle Load (ESAL) calculations and traffic impact',
          'Flexible Pavement Design using AASHTO Structural Number methods',
          'Rigid Pavement Design: JPCP, JRCP, and CRCP principles',
          'Earthworks: cut/fill volume calculations and mass haul diagrams',
          'Drainage systems and soil behavior affecting pavement longevity',
        ],
      },
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical Engineering',
    description: 'Power systems, circuits, electronics, and control theory.',
    headerImage: electricalHeroImg,
    status: 'available',
    courses: [
      {
        id: 'electric-circuits',
        title: 'Electric Circuits (Elec A1)',
        icon: Zap,
        summary:
          'Electric circuits form the foundation of virtually every electrical engineering challenge encountered in the P.Eng. exam. This course covers the fundamental techniques for analyzing linear circuits, from building lumped-parameter models of components to applying nodal and mesh analysis. You will develop fluency with both time-domain and frequency-domain approaches, and gain the tools to characterize circuit behavior using transfer functions and two-port models.',
        topics: [
          'Lumped parameter models and circuit component representation',
          'Nodal and mesh analysis of linear passive circuits',
          'Equivalent network reduction techniques',
          'Steady-state sinusoidal analysis and frequency response',
          'Impulse response and transfer function derivation',
          'Laplace transform methods and transient response analysis',
          'Two-port circuit models and analysis',
        ],
      },
      {
        id: 'systems-and-control',
        title: 'Systems and Control (Elec A2)',
        icon: Sliders,
        summary:
          'Control systems are central to electrical engineering practice, and proficiency in feedback theory is a frequent P.Eng. exam requirement. This course builds from first principles through classical design techniques including root locus, Bode diagrams, and Nyquist methods. You will finish with a solid ability to assess stability, design compensation, and represent systems in state variable form.',
        topics: [
          'System models, impulse response functions, and transfer functions',
          'System input-output relationships and convolution',
          'Root locus analysis and controller design',
          'Feedback systems and stability analysis',
          'Bode diagrams and Nyquist criterion',
          'Frequency domain design techniques',
          'State variable representation and PID control systems',
          'Systems with delay',
        ],
      },
      {
        id: 'power-systems-and-machines',
        title: 'Power Systems and Machines (Elec A6)',
        icon: Activity,
        summary:
          'A solid understanding of power systems and rotating machines is essential for electrical P.Eng. candidates. This course covers magnetic circuits and transformers, three-phase systems in wye and delta configurations, and the full chain from generation through transmission to distribution. You will analyze the behavior of synchronous machines and induction motors, building the practical knowledge needed for power systems problems on the exam.',
        topics: [
          'Magnetic circuits and transformer theory',
          'Wye and delta three-phase system configurations',
          'Generation, transmission, and distribution of electric power',
          'Three-phase transformer analysis',
          'AC and DC machine fundamentals',
          'Three-phase synchronous machine operation',
          'Three-phase induction motor analysis',
        ],
      },
      {
        id: 'power-systems-engineering',
        title: 'Power Systems Engineering (Elec B7)',
        icon: Network,
        summary:
          'Modern power grids are complex, interconnected systems that require engineers to understand everything from steady-state flow to transient stability. This course covers the analytical methods used to represent, analyze, and operate power systems, including power flow calculations, fault analysis, and protection design. You will be equipped to assess system stability, understand control strategies, and solve the power systems problems most commonly tested on the P.Eng. exam.',
        topics: [
          'Power system representation and per-unit analysis',
          'Transmission line models and transformer circuits',
          'Synchronous machine characteristics and modeling',
          'Power flow analysis, operations, and control',
          'Fault analysis: symmetrical and unsymmetrical faults',
          'Power system protection principles',
          'Steady-state and transient stability assessment',
        ],
      },
    ],
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    description: 'Thermodynamics, heat transfer, HVAC, control systems, and materials.',
    headerImage: mechanicalHeroImg,
    status: 'available',
    courses: [
      {
        id: 'applied-thermodynamics-and-heat-transfer',
        title: 'Applied Thermodynamics and Heat Transfer (MEC A1)',
        icon: Flame,
        summary:
          'Thermodynamic cycles and heat transfer mechanisms underpin the design of everything from power plants to HVAC systems. This course reviews the fundamental laws of thermodynamics and applies them to key engineering cycles including Rankine, Otto, Diesel, Brayton, and vapour compression refrigeration. The heat transfer portion covers conduction, convection, and radiation in both steady and transient conditions, with practical application to heat exchanger design.',
        topics: [
          'Fundamental laws of thermodynamics and psychrometrics',
          'Ideal gas compressor cycle analysis',
          'Rankine, Otto, Diesel, and Brayton cycle performance',
          'Vapour compression refrigeration cycle',
          'Steady and transient conduction heat transfer',
          'Natural and forced convection analysis',
          'Radiation heat transfer fundamentals',
          'Thermal analysis of heat exchangers',
        ],
      },
      {
        id: 'hvac-noise-control-energy-management',
        title: 'HVAC, Noise Control, and Energy Management (MEC B2)',
        icon: Wind,
        summary:
          'Building systems engineers must balance thermal comfort, acoustic quality, and energy performance. This course covers the full scope of HVAC system design from psychrometrics through duct and piping layout, followed by noise control principles for building environments, and structured approaches to energy auditing and management. You will be prepared to design and evaluate building mechanical systems across all three of these disciplines.',
        topics: [
          'Psychrometrics, heating and cooling load calculations',
          'Comfort, ventilation, and room air distribution',
          'Humidification, dehumidification, duct and fan design',
          'Piping, pump design, and refrigeration systems',
          'Sound wave characteristics and noise measurement',
          'Noise absorption, transmission, and control in buildings',
          'Energy usage analysis and building control systems',
          'Engineering/economic analysis and energy audit procedures',
        ],
      },
      {
        id: 'control-systems',
        title: 'Control Systems (MEC A3)',
        icon: Gauge,
        summary:
          'Control theory bridges the gap between mechanical system design and real-world dynamic behavior. This course develops mathematical models for mechanical, hydraulic, pneumatic, electrical, and thermal systems and analyzes their response using block diagrams, transfer functions, and frequency response methods. You will apply classical stability criteria and design simple compensation elements to improve system response, finishing with proportional, integral, and derivative control theory.',
        topics: [
          'Open-loop and feedback control fundamentals',
          'Mathematical models of mechanical, hydraulic, pneumatic, and electrical components',
          'Block diagrams, transfer functions, and servomechanism response',
          'Frequency response and Bode diagram analysis',
          'Stability analysis and stability criteria',
          'System response improvement via compensating elements',
          'Proportional, integral, and derivative (PID) control theory',
        ],
      },
      {
        id: 'advanced-strength-of-materials',
        title: 'Advanced Strength of Materials (MEC A7)',
        icon: Layers,
        summary:
          'Structural integrity analysis goes well beyond basic mechanics. Real engineering problems involve complex stress states, failure assessment, and energy-based methods. This course covers advanced stress-strain analysis including principal stresses, Mohr\'s circles, and generalized Hooke\'s law, then extends to failure theories, column buckling, thick-walled cylinders, and introductory fracture mechanics. Energy methods including Castigliano\'s theorem are developed and applied to statically indeterminate problems.',
        topics: [
          'Stress and strain transformations, principal stresses, and Mohr\'s circles',
          'Generalized Hooke\'s law including thermal strains',
          'Equations of equilibrium, compatibility, and failure theories',
          'Euler buckling loads, curved beams, thick-walled cylinders, and rotating disks',
          'Contact stresses, stress concentrations, and introductory fracture mechanics',
          'Strain energy principles and virtual work',
          'Castigliano\'s theorem applied to axial, bending, and torsional problems',
          'Applications to statically indeterminate structures',
        ],
      },
    ],
  },
  {
    id: 'mechatronics',
    name: 'Mechatronics Engineering',
    description: 'Control systems, circuits, electronics, thermodynamics, and power machines.',
    headerImage: mechatronicsHeroImg,
    status: 'available',
    courses: [
      {
        id: 'system-analysis-and-control',
        title: 'System Analysis and Control (MEX A1)',
        icon: Cpu,
        summary:
          'Mechatronics systems depend on precise control of interacting mechanical, electrical, and fluid subsystems. This course builds the mathematical foundation for modeling and analyzing these systems, covering open-loop and feedback control, block diagram representation, and transfer function methods. Classical design tools including Bode diagrams, root locus, and stability criteria are applied alongside PID control theory to develop practical skills for real mechatronics and automation problems.',
        topics: [
          'Open-loop and feedback control principles',
          'Mathematical models of mechanical, hydraulic, pneumatic, and electrical components',
          'Block diagrams, transfer functions, and servomechanism response',
          'Frequency response and Bode diagram analysis',
          'Stability analysis and stability criteria',
          'System response improvement via compensating elements',
          'PID control and linear controller design theory',
        ],
      },
      {
        id: 'circuits-and-electronics',
        title: 'Circuits and Electronics (MEX A2)',
        icon: CircuitBoard,
        summary:
          'Mechatronics engineers must be fluent in both circuit analysis and electronics. This course covers circuit fundamentals from lumped-parameter models and network analysis through transient response and two-port models, then extends into electronics: semiconductor devices, transistor amplifier design, operational amplifiers, and digital logic families. The combined scope prepares you for the full range of circuits and electronics problems encountered in mechatronics practice and on the P.Eng. exam.',
        topics: [
          'Nodal and mesh analysis, equivalent networks, and steady-state analysis',
          'Frequency response, impulse response, and transfer functions',
          'Laplace transform analysis and transient response',
          'Two-port circuit models',
          'Semiconductor devices: diodes, thyristors, BJTs, and FETs',
          'Bias circuits, amplifiers, small-signal models, and frequency response',
          'Operational amplifiers and comparators',
          'Digital integrated circuits and logic families: TTL, TTL-LS, and CMOS',
        ],
      },
      {
        id: 'power-systems-and-machines-mex',
        title: 'Power Systems and Machines (MEX B10)',
        icon: Plug,
        summary:
          'Understanding how electrical power is generated, transformed, and converted to mechanical motion is fundamental to mechatronics system design. This course covers the theory of magnetic circuits, transformer operation, and three-phase power systems, then moves through AC and DC machine fundamentals to synchronous machines and induction motors. You will develop the analytical tools needed to evaluate power conversion systems and rotating machines in mechatronics applications.',
        topics: [
          'Magnetic circuits and transformer theory',
          'Wye and delta three-phase system analysis',
          'Generation, transmission, and distribution of electric power',
          'Three-phase transformer configurations',
          'AC and DC machine fundamentals',
          'Three-phase synchronous machine operation',
          'Three-phase induction motor analysis',
        ],
      },
      {
        id: 'applied-thermodynamics-and-heat-transfer-mex',
        title: 'Applied Thermodynamics and Heat Transfer (MEX A4)',
        icon: Thermometer,
        summary:
          'Thermal management is a critical challenge in mechatronics system design, from power electronics cooling to actuator performance. This course covers the fundamental laws of thermodynamics applied to key engineering cycles including Rankine, Otto, Diesel, Brayton, and vapour compression refrigeration, followed by heat transfer analysis covering conduction, convection, and radiation. Practical heat exchanger design brings both disciplines together in the context of real engineering applications.',
        topics: [
          'Fundamental laws of thermodynamics and psychrometrics',
          'Ideal gas compressor cycle analysis',
          'Rankine, Otto, Diesel, and Brayton cycle performance',
          'Vapour compression refrigeration cycle',
          'Steady and transient conduction heat transfer',
          'Natural and forced convection analysis',
          'Radiation heat transfer principles',
          'Thermal analysis of heat exchangers',
        ],
      },
    ],
  },
  {
    id: 'complementary-studies',
    name: 'Complementary Studies',
    description: 'Engineering economics, management principles, and professional practice.',
    headerImage: complementaryHeroImg,
    status: 'available',
    courses: [
      {
        id: 'engineering-economics',
        title: 'Engineering Economics (CS 1)',
        icon: TrendingUp,
        summary:
          'Sound financial judgment is a core competency for practicing engineers. This course covers the full scope of engineering economics: from the time value of money and interest rate analysis through present worth, annual equivalent, and rate of return methods. You will apply these tools to compare alternatives, evaluate lease-vs-buy decisions, and conduct after-tax analysis using capital cost allowance. Sensitivity analysis and risk assessment round out the financial decision-making toolkit expected of a Professional Engineer.',
        topics: [
          'Time value of money: capital, cash flow, and interest rate concepts',
          'Nominal and effective interest rates for loans, mortgages, and bonds',
          'Present worth analysis and annual equivalent analysis',
          'Rate of return analysis for independent and mutually exclusive projects',
          'Lease vs. buy alternative analysis and decision-making',
          'After-tax analysis: capital cost allowance and corporate income tax',
          'Methods of financing and capital budgeting',
          'Break-even, sensitivity, and risk analyses',
        ],
      },
      {
        id: 'engineering-management',
        title: 'Engineering Management (CS 4)',
        icon: Briefcase,
        summary:
          'Managing engineering projects and organizations requires a breadth of skills that technical training alone does not provide. This course introduces management principles in the context of engineering practice, covering market research, strategic planning, risk management, and financial resource management alongside leadership and professional responsibility. Special attention is given to sustainable production and innovative business models, preparing engineers to lead organizations that balance performance with long-term responsibility.',
        topics: [
          'Market research, assessment, and strategic planning',
          'Risk and change management in engineering organizations',
          'Product, service, and process development frameworks',
          'Engineering project and process management',
          'Financial resource management and marketing communications',
          'Leadership, organizational management, and professional responsibility',
          'Sustainable production and consumption principles',
          'Innovative business models and practical engineering implementations',
        ],
      },
    ],
  },
];

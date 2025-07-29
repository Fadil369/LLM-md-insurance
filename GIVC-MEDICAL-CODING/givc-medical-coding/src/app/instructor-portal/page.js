// Force static generation for Cloudflare Pages
export const dynamic = "force-static";

export default function InstructorPortalPage() {
  const courseDeliveryTools = [
    {
      title: "Lesson Plan Template",
      titleAr: "قالب خطة الدرس",
      description: "Comprehensive 60-minute lesson framework with bilingual support and interactive elements.",
      descriptionAr: "إطار عمل شامل للدرس لمدة 60 دقيقة مع دعم ثنائي اللغة والعناصر التفاعلية.",
      icon: "📋",
      features: [
        "60-minute structured format",
        "Arabic/English integration",
        "Assessment alignment",
        "Cultural competency guidelines"
      ],
      link: "/instructor-portal/lesson-templates"
    },
    {
      title: "Multimedia Development Workflow",
      titleAr: "سير عمل تطوير الوسائط المتعددة",
      description: "10-step process for creating engaging educational content with quality assurance protocols.",
      descriptionAr: "عملية من 10 خطوات لإنشاء محتوى تعليمي جذاب مع بروتوكولات ضمان الجودة.",
      icon: "🎬",
      features: [
        "Storyboard templates",
        "Quality assurance checklists",
        "Technology specifications",
        "Timeline and budget planning"
      ],
      link: "/instructor-portal/multimedia-tools"
    },
    {
      title: "Assessment & Evaluation Tools",
      titleAr: "أدوات التقييم والتقويم",
      description: "Comprehensive assessment framework with rubrics, feedback mechanisms, and analytics.",
      descriptionAr: "إطار تقييم شامل مع معايير التقييم وآليات التغذية الراجعة والتحليلات.",
      icon: "📊",
      features: [
        "Interactive quiz builders",
        "Scenario-based assessments",
        "Cultural competency evaluation",
        "Performance analytics"
      ],
      link: "/instructor-portal/assessment-tools"
    },
    {
      title: "Virtual Lab Management",
      titleAr: "إدارة المختبر الافتراضي",
      description: "Tools for managing hands-on coding simulations and EHR practice environments.",
      descriptionAr: "أدوات لإدارة محاكيات الترميز العملية وبيئات ممارسة السجلات الصحية الإلكترونية.",
      icon: "🏥",
      features: [
        "EHR simulation access",
        "Student progress tracking",
        "Technical support guides",
        "Troubleshooting resources"
      ],
      link: "/instructor-portal/virtual-labs"
    }
  ];

  const trainingProgram = {
    title: "GIVC Certified Instructor Training",
    titleAr: "برنامج تدريب المدربين المعتمد من GIVC",
    duration: "8 weeks",
    commitment: "15 hours total",
    certification: "GIVC Certified Medical Coding Instructor",
    weeks: [
      { week: 1, topic: "Lesson Plan Template & Learning Objectives", duration: "1 hour", format: "Webinar" },
      { week: 2, topic: "Multimedia Development Workflow", duration: "2 hours", format: "Workshop" },
      { week: 3, topic: "Slide & Video Production Best Practices", duration: "2 hours", format: "Lab" },
      { week: 4, topic: "Quiz & Interactive Activity Authoring", duration: "1.5 hours", format: "Demo + Practice" },
      { week: 5, topic: "Virtual Lab Simulation Deployment", duration: "2 hours", format: "Simulation Lab" },
      { week: 6, topic: "Assessment & Feedback Strategies", duration: "1 hour", format: "Panel + Q&A" },
      { week: 7, topic: "Course Delivery Dry-Run & Peer Review", duration: "3 hours", format: "Practice Sessions" },
      { week: 8, topic: "Summative Evaluation & Continuous Improvement", duration: "2 hours", format: "Workshop" }
    ]
  };

  const quickActions = [
    { title: "Create New Lesson", titleAr: "إنشاء درس جديد", icon: "➕", link: "/instructor-portal/create-lesson" },
    { title: "View Student Analytics", titleAr: "عرض تحليلات الطلاب", icon: "📈", link: "/instructor-portal/analytics" },
    { title: "Access Course Materials", titleAr: "الوصول لمواد الدورة", icon: "📚", link: "/instructor-portal/materials" },
    { title: "Schedule Training Session", titleAr: "جدولة جلسة تدريبية", icon: "📅", link: "/instructor-portal/schedule" }
  ];

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>GIVC Medical</a>
            </div>
            <ul className="nav-links">
              <li><a href="/courses" className="nav-link">Courses</a></li>
              <li><a href="/about" className="nav-link">About</a></li>
              <li><a href="/contact" className="nav-link">Contact</a></li>
              <li><a href="/instructor-portal" className="nav-link" style={{ color: 'var(--primary)' }}>Instructor Portal</a></li>
              <li><a href="/register" className="btn btn-primary">Get Started</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>GIVC Instructor Portal</h1>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-4)', direction: 'rtl' }}>
              بوابة المدربين GIVC
            </h2>
            <p>
              Access comprehensive course delivery tools, training resources, and professional development opportunities. 
              Build world-class medical coding education experiences with our proven framework.
            </p>
            <p style={{ direction: 'rtl', color: 'var(--gray-600)', marginTop: 'var(--space-2)' }}>
              الوصول إلى أدوات تقديم الدورات الشاملة وموارد التدريب وفرص التطوير المهني. 
              بناء تجارب تعليمية عالمية المستوى في الترميز الطبي باستخدام إطار العمل المثبت لدينا.
            </p>
            <div className="flex-center" style={{ gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
              <a href="#training-program" className="btn btn-primary btn-large">Start Training Program</a>
              <a href="#course-tools" className="btn btn-secondary btn-large">Explore Tools</a>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="section" style={{ backgroundColor: 'var(--gray-50)' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: 'var(--space-8)' }}>
              <h2>Quick Actions</h2>
              <p style={{ direction: 'rtl', color: 'var(--gray-600)' }}>الإجراءات السريعة</p>
            </div>
            
            <div className="grid grid-4">
              {quickActions.map((action, index) => (
                <a key={index} href={action.link} className="card" style={{ 
                  textDecoration: 'none', 
                  color: 'inherit',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'pointer'
                }}>
                  <div className="text-center">
                    <div style={{ 
                      fontSize: '3rem', 
                      marginBottom: 'var(--space-4)',
                      color: 'var(--primary)'
                    }}>
                      {action.icon}
                    </div>
                    <h3 style={{ marginBottom: 'var(--space-2)' }}>{action.title}</h3>
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: 'var(--gray-600)',
                      direction: 'rtl'
                    }}>
                      {action.titleAr}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Course Delivery Tools */}
        <section id="course-tools" className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
              <h2>Course Delivery Framework</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)' }}>
                Comprehensive tools and templates for effective medical coding education
              </p>
              <p style={{ direction: 'rtl', color: 'var(--gray-600)', marginTop: 'var(--space-2)' }}>
                أدوات وقوالب شاملة للتعليم الفعال في الترميز الطبي
              </p>
            </div>

            <div className="grid grid-2">
              {courseDeliveryTools.map((tool, index) => (
                <div key={index} className="card">
                  <div className="card-header">
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: 'var(--space-4)' 
                    }}>
                      <div style={{ 
                        fontSize: '2.5rem', 
                        marginRight: 'var(--space-3)',
                        color: 'var(--primary)'
                      }}>
                        {tool.icon}
                      </div>
                      <div>
                        <h3 className="card-title" style={{ marginBottom: 'var(--space-1)' }}>
                          {tool.title}
                        </h3>
                        <h4 style={{ 
                          fontSize: '1rem', 
                          color: 'var(--gray-600)', 
                          fontWeight: 'var(--font-weight-medium)',
                          direction: 'rtl'
                        }}>
                          {tool.titleAr}
                        </h4>
                      </div>
                    </div>
                    
                    <p style={{ marginBottom: 'var(--space-3)' }}>{tool.description}</p>
                    <p style={{ 
                      marginBottom: 'var(--space-4)', 
                      color: 'var(--gray-600)',
                      fontSize: '0.9rem',
                      direction: 'rtl'
                    }}>
                      {tool.descriptionAr}
                    </p>
                  </div>

                  <div style={{ marginBottom: 'var(--space-6)' }}>
                    <h4 style={{ 
                      fontSize: '1rem', 
                      fontWeight: 'var(--font-weight-semibold)',
                      marginBottom: 'var(--space-3)' 
                    }}>
                      Key Features:
                    </h4>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0,
                      marginBottom: 'var(--space-6)' 
                    }}>
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start',
                          marginBottom: 'var(--space-2)' 
                        }}>
                          <span style={{ 
                            color: 'var(--secondary)', 
                            marginRight: 'var(--space-2)',
                            fontSize: '1.2rem'
                          }}>
                            ✓
                          </span>
                          <span style={{ color: 'var(--gray-600)' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href={tool.link} className="btn btn-primary" style={{ width: '100%' }}>
                    Access Tool
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Program */}
        <section id="training-program" className="section" style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
              <h2 style={{ color: 'var(--white)' }}>{trainingProgram.title}</h2>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                fontSize: '1.125rem',
                direction: 'rtl',
                marginTop: 'var(--space-2)'
              }}>
                {trainingProgram.titleAr}
              </p>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 'var(--space-8)',
                marginTop: 'var(--space-6)',
                flexWrap: 'wrap'
              }}>
                <div className="text-center">
                  <div style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--white)'
                  }}>
                    {trainingProgram.duration}
                  </div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Duration</p>
                </div>
                <div className="text-center">
                  <div style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--white)'
                  }}>
                    {trainingProgram.commitment}
                  </div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Total Hours</p>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: 'var(--space-12)' }}>
              <h3 style={{ 
                color: 'var(--white)', 
                textAlign: 'center', 
                marginBottom: 'var(--space-8)' 
              }}>
                Weekly Training Schedule
              </h3>
              
              <div className="grid grid-2">
                {trainingProgram.weeks.map((week, index) => (
                  <div key={index} className="card" style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'var(--white)'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: 'var(--space-3)' 
                    }}>
                      <div style={{ 
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 'var(--space-3)',
                        fontWeight: 'var(--font-weight-bold)'
                      }}>
                        {week.week}
                      </div>
                      <div>
                        <div style={{ 
                          fontSize: '0.875rem', 
                          color: 'rgba(255, 255, 255, 0.7)' 
                        }}>
                          Week {week.week}
                        </div>
                        <div style={{ 
                          fontSize: '0.875rem', 
                          color: 'rgba(255, 255, 255, 0.8)' 
                        }}>
                          {week.duration} • {week.format}
                        </div>
                      </div>
                    </div>
                    <h4 style={{ 
                      color: 'var(--white)', 
                      fontSize: '1rem',
                      lineHeight: '1.4'
                    }}>
                      {week.topic}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div style={{ 
                padding: 'var(--space-6)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: 'var(--space-8)'
              }}>
                <h3 style={{ color: 'var(--white)', marginBottom: 'var(--space-3)' }}>
                  Earn Your Certification
                </h3>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '1.1rem',
                  marginBottom: 'var(--space-4)'
                }}>
                  {trainingProgram.certification}
                </p>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.9rem'
                }}>
                  Complete all 8 sessions, submit assignments, and pass the final competency assessment
                </p>
              </div>
              
              <a href="/instructor-portal/register-training" className="btn btn-secondary btn-large">
                Register for Training Program
              </a>
            </div>
          </div>
        </section>

        {/* Resources & Support */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
              <h2>Resources & Support</h2>
              <p style={{ direction: 'rtl', color: 'var(--gray-600)' }}>الموارد والدعم</p>
            </div>

            <div className="grid grid-3">
              <div className="card">
                <div className="card-header">
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    backgroundColor: 'var(--secondary)', 
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)',
                    fontSize: '24px',
                    color: 'var(--white)'
                  }}>
                    📚
                  </div>
                  <h3 className="card-title">Resource Library</h3>
                  <p style={{ direction: 'rtl', color: 'var(--gray-600)', fontSize: '0.9rem' }}>
                    مكتبة الموارد
                  </p>
                </div>
                <p>
                  Access templates, guides, examples, and reference materials for all course delivery components.
                </p>
                <a href="/instructor-portal/resources" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-4)' }}>
                  Browse Resources
                </a>
              </div>

              <div className="card">
                <div className="card-header">
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    backgroundColor: 'var(--accent)', 
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)',
                    fontSize: '24px',
                    color: 'var(--white)'
                  }}>
                    🤝
                  </div>
                  <h3 className="card-title">Community Forum</h3>
                  <p style={{ direction: 'rtl', color: 'var(--gray-600)', fontSize: '0.9rem' }}>
                    منتدى المجتمع
                  </p>
                </div>
                <p>
                  Connect with fellow instructors, share best practices, and collaborate on course improvements.
                </p>
                <a href="/instructor-portal/community" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-4)' }}>
                  Join Community
                </a>
              </div>

              <div className="card">
                <div className="card-header">
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    backgroundColor: 'var(--primary)', 
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)',
                    fontSize: '24px',
                    color: 'var(--white)'
                  }}>
                    💬
                  </div>
                  <h3 className="card-title">Technical Support</h3>
                  <p style={{ direction: 'rtl', color: 'var(--gray-600)', fontSize: '0.9rem' }}>
                    الدعم التقني
                  </p>
                </div>
                <p>
                  Get help with platform issues, software setup, and technical troubleshooting from our support team.
                </p>
                <a href="/instructor-portal/support" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-4)' }}>
                  Get Support
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: 'var(--gray-50)' }}>
          <div className="container">
            <div className="card" style={{ 
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
              color: 'var(--white)',
              textAlign: 'center',
              padding: 'var(--space-12)'
            }}>
              <h2 style={{ color: 'var(--white)', marginBottom: 'var(--space-4)' }}>
                Ready to Transform Medical Coding Education?
              </h2>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                fontSize: '1.125rem',
                marginBottom: 'var(--space-4)',
                maxWidth: '600px',
                margin: '0 auto var(--space-4)'
              }}>
                Join our community of expert instructors and deliver world-class medical coding education.
              </p>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '1rem',
                marginBottom: 'var(--space-8)',
                direction: 'rtl'
              }}>
                انضم إلى مجتمع المدربين الخبراء وقدم تعليماً عالمي المستوى في الترميز الطبي.
              </p>
              <div className="flex-center" style={{ gap: 'var(--space-4)' }}>
                <a href="/instructor-portal/register-training" className="btn btn-secondary btn-large">
                  Start Training Today
                </a>
                <a href="/contact" className="btn" style={{ 
                  backgroundColor: 'transparent', 
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: 'var(--white)'
                }}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="grid grid-2" style={{ marginBottom: 'var(--space-8)' }}>
            <div>
              <h3 style={{ color: 'var(--white)', marginBottom: 'var(--space-4)' }}>
                GIVC Medical Coding
              </h3>
              <p>Professional medical coding education for healthcare professionals worldwide.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--white)', marginBottom: 'var(--space-4)' }}>
                Instructor Resources
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <a href="/instructor-portal/lesson-templates" style={{ color: 'var(--gray-300)' }}>Lesson Templates</a>
                <a href="/instructor-portal/assessment-tools" style={{ color: 'var(--gray-300)' }}>Assessment Tools</a>
                <a href="/instructor-portal/training" style={{ color: 'var(--gray-300)' }}>Training Program</a>
                <a href="/instructor-portal/support" style={{ color: 'var(--gray-300)' }}>Support</a>
              </div>
            </div>
          </div>
          <div style={{ 
            textAlign: 'center', 
            paddingTop: 'var(--space-6)',
            borderTop: '1px solid var(--gray-700)'
          }}>
            <p>&copy; 2024 GIVC Medical Coding. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
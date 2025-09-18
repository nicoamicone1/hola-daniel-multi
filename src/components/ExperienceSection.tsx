import { forwardRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/translations';

export const ExperienceSection = forwardRef<HTMLElement>((_, ref) => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section ref={ref} className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {t.experience.title}
                </h2>

                {
                    t.experience.jobs.map((job, index) => (
                        <Card className="bg-card-bg border-border backdrop-blur-sm mb-8" key={index}>
                            <CardContent className="p-8">
                                <p className="text-xl leading-relaxed mb-2">{job.company} - {job.role} ({job.period})</p>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    {`${job.description}`}
                                </p>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </section>
    );
});

ExperienceSection.displayName = 'ExperienceSection';
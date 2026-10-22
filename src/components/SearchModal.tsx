import React, { useState, useEffect, useRef } from 'react';
import { MAJOR_DOMAINS, MajorDomain, SubCategory } from '../data/mathCategories';
import { useEyeTheme } from '../context/ThemeContext';
import { Search, X, ArrowLeft, Layers, Compass } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDomain: (domainId: string) => void;
  onSelectSubcategory: (domainId: string, subcategoryId: string, topicId?: string, testId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDomain,
  onSelectSubcategory,
}) => {
  const { themeClasses } = useEyeTheme();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const normalized = query.trim().toLowerCase();

  const matchingDomains: MajorDomain[] = normalized
    ? MAJOR_DOMAINS.filter(
        (d) =>
          d.title.toLowerCase().includes(normalized) ||
          d.shortDesc.toLowerCase().includes(normalized) ||
          d.mathSymbol.toLowerCase().includes(normalized)
      )
    : [];

  const matchingSubcategories: {
    domain: MajorDomain;
    sub: SubCategory;
    parentSubId?: string;
    topicId?: string;
    parentTitle?: string;
  }[] = [];

  if (normalized) {
    for (const d of MAJOR_DOMAINS) {
      for (const s of d.subcategories) {
        if (
          s.title.toLowerCase().includes(normalized) ||
          s.shortDesc.toLowerCase().includes(normalized) ||
          s.mathSymbol.toLowerCase().includes(normalized)
        ) {
          matchingSubcategories.push({ domain: d, sub: s });
        }
        if (s.subSections) {
          for (const subTopic of s.subSections) {
            if (
              subTopic.title.toLowerCase().includes(normalized) ||
              subTopic.shortDesc.toLowerCase().includes(normalized) ||
              subTopic.mathSymbol.toLowerCase().includes(normalized)
            ) {
              matchingSubcategories.push({
                domain: d,
                sub: subTopic,
                parentSubId: s.id,
                parentTitle: s.title,
              });
            }
            if (subTopic.subSections) {
              for (const childTest of subTopic.subSections) {
                if (
                  childTest.title.toLowerCase().includes(normalized) ||
                  childTest.shortDesc.toLowerCase().includes(normalized) ||
                  childTest.mathSymbol.toLowerCase().includes(normalized)
                ) {
                  matchingSubcategories.push({
                    domain: d,
                    sub: childTest,
                    parentSubId: s.id,
                    topicId: subTopic.id,
                    parentTitle: `${s.title} · ${subTopic.title}`,
                  });
                }
              }
            }
          }
        }
      }
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 backdrop-blur-xs">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`relative w-full max-w-2xl rounded-2xl border ${themeClasses.border} ${themeClasses.cardBg} shadow-xl overflow-hidden z-10`}
      >
        {/* Search Input Bar */}
        <div className={`p-4 border-b ${themeClasses.border} flex items-center gap-3`}>
          <Search className={`w-5 h-5 ${themeClasses.textMuted} shrink-0`} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن أي مجال، قسم فرعي، معادلة، أو مفهوم رياضي..."
            className={`w-full bg-transparent text-sm sm:text-base ${themeClasses.textPrimary} placeholder:${themeClasses.textMuted} outline-none`}
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className={`p-1 rounded-md text-xs ${themeClasses.textMuted} hover:${themeClasses.textPrimary}`}
            >
              مسح
            </button>
          ) : null}
          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg ${themeClasses.textMuted} hover:${themeClasses.textPrimary} transition-colors`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!normalized ? (
            <div className="py-6 text-center space-y-2">
              <Compass className={`w-8 h-8 mx-auto opacity-30 ${themeClasses.textMuted}`} />
              <p className={`text-sm ${themeClasses.textMuted}`}>
                اكتب للبحث السريع في الـ 7 مجالات الكبرى و الـ 36 تصنيفاً فرعياً
              </p>
            </div>
          ) : matchingDomains.length === 0 && matchingSubcategories.length === 0 ? (
            <div className="py-8 text-center space-y-2">
              <p className={`text-sm ${themeClasses.textSecondary}`}>
                لم نجد نتائج مطابقة لـ "{query}"
              </p>
              <p className={`text-xs ${themeClasses.textMuted}`}>
                جرّب البحث بمصطلحات مثل: حساب، تفاضل، متتاليات، زوايا، احتمالات، مصفوفات
              </p>
            </div>
          ) : (
            <>
              {matchingDomains.length > 0 && (
                <div className="space-y-2">
                  <h4 className={`text-xs font-semibold ${themeClasses.textMuted}`}>
                    المجالات الكبرى ({matchingDomains.length})
                  </h4>
                  <div className="space-y-1.5">
                    {matchingDomains.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => {
                          onSelectDomain(d.id);
                          onClose();
                        }}
                        className={`w-full p-3 rounded-xl border ${themeClasses.border} ${themeClasses.cardHoverBg} flex items-center justify-between text-right transition-colors cursor-pointer`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#127052]/10 text-[#127052] dark:text-[#5EB5A1] flex items-center justify-center font-bold text-xs font-mono">
                            ∑
                          </div>
                          <div>
                            <span className={`text-sm font-medium ${themeClasses.textPrimary} block`}>
                              {d.title}
                            </span>
                            <span className={`text-xs ${themeClasses.textMuted}`}>
                              {d.academicStage} · {d.subcategories.length} أقسام
                            </span>
                          </div>
                        </div>
                        <ArrowLeft className={`w-4 h-4 ${themeClasses.textMuted}`} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchingSubcategories.length > 0 && (
                <div className="space-y-2">
                  <h4 className={`text-xs font-semibold ${themeClasses.textMuted}`}>
                    التصنيفات الفرعية ({matchingSubcategories.length})
                  </h4>
                  <div className="space-y-1.5">
                    {matchingSubcategories.map(({ domain, sub, parentSubId, topicId, parentTitle }) => (
                      <button
                        key={`${domain.id}_${parentSubId || ''}_${topicId || ''}_${sub.id}`}
                        onClick={() => {
                          if (topicId && parentSubId) {
                            onSelectSubcategory(domain.id, parentSubId, topicId, sub.id);
                          } else if (parentSubId) {
                            onSelectSubcategory(domain.id, parentSubId, sub.id);
                          } else {
                            onSelectSubcategory(domain.id, sub.id);
                          }
                          onClose();
                        }}
                        className={`w-full p-3 rounded-xl border ${themeClasses.border} ${themeClasses.cardHoverBg} flex items-center justify-between text-right transition-colors cursor-pointer`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] text-[#127052] dark:text-[#5EB5A1] flex items-center justify-center font-mono text-xs font-bold border border-black/5 dark:border-white/5">
                            {sub.mathSymbol ? sub.mathSymbol.charAt(0) : '#'}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-medium ${themeClasses.textPrimary}`}>
                                {sub.title}
                              </span>
                              <span className={`text-xs font-mono opacity-60 ${themeClasses.textMuted}`}>
                                {sub.mathSymbol}
                              </span>
                            </div>
                            <span className={`text-xs ${themeClasses.textMuted}`}>
                              {parentTitle
                                ? `تابع لـ: ${domain.title} · ${parentTitle} · المستوى: ${sub.level}`
                                : `تابع لـ: ${domain.title} · المستوى: ${sub.level}`}
                            </span>
                          </div>
                        </div>
                        <ArrowLeft className={`w-4 h-4 ${themeClasses.textMuted}`} />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

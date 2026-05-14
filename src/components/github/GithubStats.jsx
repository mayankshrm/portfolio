import React, { useEffect, useState } from "react";
import "./github.css";
import { FiGithub, FiStar, FiGitBranch, FiCode } from "react-icons/fi";
import Reveal from "../common/Reveal";

const USERNAME = "mayankshrm";

const formatDate = (iso) => {
    try {
        return new Date(iso).toLocaleDateString(undefined, {
            month: "short", year: "numeric"
        });
    } catch { return ""; }
};

const GithubStats = () => {
    const [state, setState] = useState({ loading: true, error: null, user: null, repos: [] });

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const [userRes, reposRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${USERNAME}`),
                    fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
                ]);
                if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");
                const user = await userRes.json();
                const repos = await reposRes.json();
                if (cancelled) return;
                setState({ loading: false, error: null, user, repos });
            } catch (e) {
                if (!cancelled) setState({ loading: false, error: e.message, user: null, repos: [] });
            }
        })();
        return () => { cancelled = true; };
    }, []);

    const { loading, error, user, repos } = state;

    const topRepos = repos
        .filter(r => !r.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at))
        .slice(0, 4);

    const languageBreakdown = (() => {
        const counts = {};
        repos.filter(r => !r.fork && r.language).forEach(r => {
            counts[r.language] = (counts[r.language] || 0) + 1;
        });
        const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
        return Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
            .map(([name, n]) => ({ name, pct: Math.round((n / total) * 100) }));
    })();

    return (
        <section className="github section" id="github">
            <Reveal>
                <div className="github__head container">
                    <span className="github__kicker"><FiGithub /> github · live</span>
                    <h2 className="github__title">Open source &amp; side work</h2>
                    <p className="github__lede">
                        Pulled live from <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer" className="github__link">@{USERNAME}</a> — refreshes on every visit.
                    </p>
                </div>
            </Reveal>

            <Reveal delay={0.1}>
                <div className="github__grid container">
                    {/* SUMMARY */}
                    <div className="github__summary">
                        <div className="github__stat">
                            <span className="github__stat-label">Public repos</span>
                            <span className="github__stat-value">
                                {loading ? "…" : (user?.public_repos ?? "—")}
                            </span>
                        </div>
                        
                        <div className="github__stat">
                            <span className="github__stat-label">On GitHub since</span>
                            <span className="github__stat-value github__stat-value--sm">
                                {loading ? "…" : (user ? formatDate(user.created_at) : "—")}
                            </span>
                        </div>
                    </div>

                    {/* LANGUAGE BREAKDOWN */}
                    <div className="github__panel">
                        <header className="github__panel-head">
                            <FiCode /> <span>Languages by repo</span>
                        </header>
                        {loading ? (
                            <p className="github__hint">Loading…</p>
                        ) : error ? (
                            <p className="github__hint">Couldn't load right now.</p>
                        ) : (
                            <div className="github__lang-list">
                                {languageBreakdown.map((l, i) => (
                                    <div className="github__lang" key={l.name}>
                                        <div className="github__lang-row">
                                            <span>{l.name}</span>
                                            <span className="github__lang-pct">{l.pct}%</span>
                                        </div>
                                        <div className="github__lang-bar">
                                            <span style={{ width: `${l.pct}%`, animationDelay: `${i * 80}ms` }} />
                                        </div>
                                    </div>
                                ))}
                                {languageBreakdown.length === 0 && (
                                    <p className="github__hint">No language data yet.</p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* TOP REPOS */}
                    <div className="github__panel github__panel--wide">
                        <header className="github__panel-head">
                            <FiGitBranch /> <span>Recent repositories</span>
                        </header>
                        {loading ? (
                            <p className="github__hint">Loading…</p>
                        ) : error ? (
                            <p className="github__hint">Couldn't load right now.</p>
                        ) : (
                            <ul className="github__repos">
                                {topRepos.map(r => (
                                    <li className="github__repo" key={r.id}>
                                        <a href={r.html_url} target="_blank" rel="noreferrer" className="github__repo-link">
                                            <div className="github__repo-head">
                                                <span className="github__repo-name">{r.name}</span>
                                                {r.stargazers_count > 0 && (
                                                    <span className="github__repo-stars">
                                                        <FiStar /> {r.stargazers_count}
                                                    </span>
                                                )}
                                            </div>
                                            {r.description && (
                                                <p className="github__repo-desc">{r.description}</p>
                                            )}
                                            <div className="github__repo-meta">
                                                {r.language && <span className="github__repo-lang">{r.language}</span>}
                                                <span className="github__repo-updated">
                                                    Updated {formatDate(r.pushed_at)}
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                                {topRepos.length === 0 && (
                                    <p className="github__hint">No repos to show.</p>
                                )}
                            </ul>
                        )}
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default GithubStats;
